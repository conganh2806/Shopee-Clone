using ShopeeClone.Backend.Core.Entities;

namespace ShopeeClone.Backend.Application.Common.Interfaces
{
    public interface IUserRepository : IScopedService
    {
        Task<User?> GetUserByPhoneAsync(string phone, CancellationToken cancellationToken);
        Task AddUserAsync(User user, CancellationToken cancellationToken);
    }
}
