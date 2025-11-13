using ShopeeClone.Backend.Core.Entities;

namespace ShopeeClone.Backend.Application.Features.Auth
{
    public record AuthResult(User User, string Token);
}
