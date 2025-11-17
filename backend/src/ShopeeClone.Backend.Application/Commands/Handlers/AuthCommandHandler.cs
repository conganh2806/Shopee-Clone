using MediatR;
using ShopeeClone.Backend.Application.Commands.Auth;
using ShopeeClone.Backend.Application.Common.Exceptions;
using ShopeeClone.Backend.Application.Common.Inferfaces.Auth;
using ShopeeClone.Backend.Application.Common.Interfaces;
using ShopeeClone.Backend.Application.DTOs;

namespace ShopeeClone.Backend.Application.Commands.Handlers
{
    public class AuthCommandHandler : IRequestHandler<AuthCommand, AuthResponseDTO>
    {
        private readonly ITokenGenerator _tokenGenerator;
        private readonly IIdentityService _identityService;

        public AuthCommandHandler(IIdentityService identityService, ITokenGenerator tokenGenerator)
        {
            _identityService = identityService;
            _tokenGenerator = tokenGenerator;
        }

        public async Task<AuthResponseDTO> Handle(
            AuthCommand request,
            CancellationToken cancellationToken
        )
        {
            var result = await _identityService.SigninUserAsync(request.Username, request.Password);

            if (!result)
            {
                throw new BadRequestException("Invalid username or password.");
            }

            var userDetails = await _identityService.GetUserDetailsByUsernameAsync(
                request.Username,
                cancellationToken
            );

            string token = _tokenGenerator.GenerateJWTToken(
                (userDetails.UserId, userDetails.Username, userDetails.Roles)
            );

            return new AuthResponseDTO
            {
                UserId = userDetails.UserId,
                FullName = userDetails.FullName,
                Token = token
            };
        }
    }
}
