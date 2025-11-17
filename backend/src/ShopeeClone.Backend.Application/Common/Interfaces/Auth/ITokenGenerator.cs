using ShopeeClone.Backend.Application.Common.Interfaces;

namespace ShopeeClone.Backend.Application.Common.Inferfaces.Auth
{
    public interface ITokenGenerator
    {
        string GenerateJWTToken((string userId, string userName, IList<string> roles) userDetails);
    }
}
