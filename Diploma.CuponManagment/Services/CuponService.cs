using System.Text.Json;
using Diploma.DAL.Entities.Abstract;
using Diploma.DAL.Extensions;
using Diploma.Utility.Repository.Interfaces;
using Diploma.Utility.ServiceCommunication;
using Microsoft.Extensions.Caching.Distributed;

namespace Diploma.API.Services;

public class CuponService<TCupon>(IRepository<TCupon> cuponRepository, IDistributedCache cache) where TCupon : Cupon
{                               
    private IDistributedCache _cache = cache;
                                        
    public async Task<List<TCupon>> GetCuponsFromCache()                                                                                                
    {
        string todayCacheKey = typeof(TCupon).Name + DateTime.UtcNow.Day;                                                                                                                                                                                           
        return await _cache.GetRecordAsync<List<TCupon>>(todayCacheKey) ?? new List<TCupon>();
    }

    public async Task SetCuponsToCache(List<TCupon> cupons)
    {
        string todayCacheKey = typeof(TCupon).Name + DateTime.Now.Day;
        await cache.SetRecordAsync(todayCacheKey, cupons);
    }

    public async Task<List<TCupon>> GetCupons()
    {
        var cupons = await GetCuponsFromCache();
        if(cupons.Count != 0)
            return cupons;
        
        HttpCommunicator communicator = new HttpCommunicator();
        List<TCupon>? cuponsFromParser = JsonSerializer.Deserialize<List<TCupon>>(communicator
            .Send("http://localhost:5042", $"Parser/{typeof(TCupon).Name}", HttpMethod.Get)
            .Result.Content.ReadAsStringAsync().Result);

        if (cuponsFromParser == null)
            return new List<TCupon>();
        
        foreach(var cupon in cuponsFromParser)
            await cuponRepository.CreateAsync(cupon);
        
        await SetCuponsToCache(cuponsFromParser);
        
        return cuponsFromParser;
    }

    public async Task<bool> UpdateCuponAsync(TCupon newCupon, CancellationToken cancellationToken = default)
    {
        TCupon? cupon = await cuponRepository.GetItemByIdAsync(newCupon.Id, cancellationToken);
        if(cupon == null)
            return false;
        await cuponRepository.UpdateAsync(cupon, newCupon.Id, cancellationToken);
        return true;
    }
    
}