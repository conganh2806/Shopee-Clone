using MediatR;
using ShopeeClone.Backend.Application.Common.Interfaces;
using ShopeeClone.Backend.Application.DTOs;

namespace ShopeeClone.Backend.Application.Queries.Handler
{
    public class GetUserQueryHandler : IRequestHandler<GetUserQuery, List<UserResponseDTO>>
    {
        private readonly IIdentityService _identityService;

        public GetUserQueryHandler(IIdentityService identityService)
        {
            _identityService = identityService;
        }

        public async Task<List<UserResponseDTO>> Handle(
            GetUserQuery request,
            CancellationToken cancellationToken
        )
        {
            var users = await _identityService.GetAllUsersAsync();

            return users;
        }
    }
}
