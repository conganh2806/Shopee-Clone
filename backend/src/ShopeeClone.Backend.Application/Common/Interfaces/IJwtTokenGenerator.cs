using ShopeeClone.Backend.Application.Common.Interfaces;

namespace ShopeeClone.Backend.Application.Common
{
    public interface IJwtTokenGenerator : ISingletonService
    {
        string GenerateToken(string userId, string phone);
    }
}
