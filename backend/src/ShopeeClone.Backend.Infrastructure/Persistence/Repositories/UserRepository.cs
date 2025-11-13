using Microsoft.EntityFrameworkCore;
using ShopeeClone.Backend.Application.Common.Interfaces;
using ShopeeClone.Backend.Core.Entities;

namespace ShopeeClone.Backend.Infrastructure.Persistence.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly IAppDbContext _context;

        public UserRepository(IAppDbContext context)
        {
            _context = context;
        }

        public async Task AddUserAsync(User user, CancellationToken cancellationToken)
        {
            await _context.Users.AddAsync(user, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);
        }

        public async Task<User?> GetUserByPhoneAsync(
            string phone,
            CancellationToken cancellationToken
        )
        {
            return await _context.Users.FirstOrDefaultAsync(
                u => u.Phone == phone,
                cancellationToken
            );
        }
    }
}
