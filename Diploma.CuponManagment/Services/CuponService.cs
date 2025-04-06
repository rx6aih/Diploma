using System.Text.Json;
using Diploma.DAL.Entities.Abstract;
using Diploma.DAL.Entities.Implementations;
using Diploma.DAL.Extensions;
using Diploma.DAL.Interfaces;
using Diploma.Utility.ServiceCommunication;
using Microsoft.Extensions.Caching.Distributed;

namespace Diploma.API.Services;

public class CuponService<TCupon>(IRepository<TCupon> cuponRepository, IDistributedCache cache) where TCupon : class
{
    private IDistributedCache _cache = cache;
    
    public async Task<List<TCupon>> GetCuponsFromCache()
    {
        string todayCacheKey = typeof(TCupon).Name + DateTime.Now.Day;
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
            .Send("http://localhost:5042", $"Parser/{typeof(TCupon).Name}")
            .Result.Content.ReadAsStringAsync().Result);

        if (cuponsFromParser == null)
            return new List<TCupon>();
        
        foreach(var cupon in cuponsFromParser)
            await cuponRepository.CreateAsync(cupon);
        
        await SetCuponsToCache(cupons);
        
        return cupons;
    }
}