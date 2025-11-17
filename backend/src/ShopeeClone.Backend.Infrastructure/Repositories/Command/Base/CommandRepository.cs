using Microsoft.EntityFrameworkCore;
using ShopeeClone.Backend.Core.Repositories.Command.Base;
using ShopeeClone.Backend.Infrastructure.Data;

namespace ShopeeClone.Backend.Infrastructure.Repositories.Command.Base
{
    public class CommandRepository<T> : ICommandRepository<T>
        where T : class
    {
        protected readonly ApplicationDbContext _context;

        public CommandRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<T> AddAsync(T entity)
        {
            await _context.Set<T>().AddAsync(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task UpdateAsync(T entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(T entity)
        {
            _context.Set<T>().Remove(entity);
            await _context.SaveChangesAsync();
        }
    }
}
