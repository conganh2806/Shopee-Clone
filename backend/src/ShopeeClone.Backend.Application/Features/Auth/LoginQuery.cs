using MediatR;

namespace ShopeeClone.Backend.Application.Features.Auth
{
    public record LoginQuery(string Phone, string Password) : IRequest<AuthResult>;
}
