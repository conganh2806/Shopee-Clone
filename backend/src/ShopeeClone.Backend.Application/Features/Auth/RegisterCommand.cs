using MediatR;

namespace ShopeeClone.Backend.Application.Features.Auth
{
    public record RegisterCommand(string Phone, string Password, string ConfirmPassword)
        : IRequest<AuthResult>;
}
