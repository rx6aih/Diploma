namespace Diploma.Utility.Repository.Interfaces;

public interface IRepository<T> where T : class
{
    Task CreateAsync(T item, CancellationToken cancellationToken = default);
    Task<List<T>> GetItemsAsync(CancellationToken cancellationToken = default);
    Task<T?> GetItemByIdAsync(int id, CancellationToken cancellationToken = default);
    Task<T?> GetByTypeAsync(string type, CancellationToken cancellationToken = default);
    Task UpdateAsync(T item, int id, CancellationToken cancellationToken = default);
    Task DeleteAsync(T item, CancellationToken cancellationToken = default);
}   