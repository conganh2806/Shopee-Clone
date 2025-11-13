using Microsoft.EntityFrameworkCore;
using ShopeeClone.Backend.Core.Entities;

namespace ShopeeClone.Backend.Application.Common.Interfaces
{
    public interface IAppDbContext
    {
        DbSet<User> Users { get; set; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
