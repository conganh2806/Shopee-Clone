using MediatR;
using ShopeeClone.Backend.Application.Commands.User;
using ShopeeClone.Backend.Application.Common.Interfaces;
using ShopeeClone.Backend.Application.DTOs;

namespace ShopeeClone.Backend.Application.Commands.Handlers
{
    public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, bool>
    {
        private readonly IIdentityService _identityService;

        public CreateUserCommandHandler(IIdentityService identityService)
        {
            _identityService = identityService;
        }

        public async Task<bool> Handle(
            CreateUserCommand request,
            CancellationToken cancellationToken
        )
        {
            if (request.Password != request.ConfirmationPassword)
            {
                throw new ArgumentException("Password and confirmation password do not match.");
            }

            var createUserDto = new CreateUserDTO
            {
                Username = request.UserName,
                Password = request.Password,
                Email = request.Email,
                FullName = request.FullName,
                Roles = request.Roles
            };

            var result = await _identityService.CreateUserAsync(createUserDto);
            return result;
        }
    }
}
