using MediatR;
using ShopeeClone.Backend.Application.DTOs;

namespace ShopeeClone.Backend.Application.Commands.Auth
{
    public class AuthCommand : IRequest<AuthResponseDTO>
    {
        public string Username { get; set; } = default!;
        public string Password { get; set; } = default!;
    }
}
