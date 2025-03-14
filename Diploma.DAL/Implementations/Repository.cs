using Diploma.DAL.Context;
using Diploma.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Diploma.DAL.Implementations;


public class Repository<T>(CuponManagerContext context) : IRepository<T>
    where T : class
{
    private readonly DbSet<T> _dbSet = context.Set<T>();

    public async Task CreateAsync(T item, CancellationToken cancellationToken = default)
    {
        await _dbSet.AddAsync(item, cancellationToken);
        await context.SaveChangesAsync(cancellationToken);
    }

    public async Task<List<T>> GetItemsAsync(CancellationToken cancellationToken = default)
    {
        return await _dbSet.ToListAsync(cancellationToken);
    }

    public async Task<T?> GetItemByIdAsync(int id, CancellationToken cancellationToken = default)
    {
        return await _dbSet.FindAsync(id, cancellationToken);
    }

    public async Task<T?> GetByTypeAsync(string type, CancellationToken cancellationToken = default)
    {
        return await _dbSet.FindAsync(type, cancellationToken);
    }
    
    public async Task UpdateAsync(T item, int id, CancellationToken cancellationToken = default)
    {   
        var current = await _dbSet.FindAsync(id, cancellationToken);
        if(current == null)
            throw new Exception($"No such {typeof(T).Name} item");
        current = item;
        _dbSet.Update(current);
        await context.SaveChangesAsync(cancellationToken);
    }

    public async Task DeleteAsync(T item, CancellationToken cancellationToken = default)
    {
        _dbSet.Remove(item);
        await context.SaveChangesAsync(cancellationToken);
    }
}