using MediatR;
using ShopeeClone.Backend.Application.DTOs;

namespace ShopeeClone.Backend.Application.Queries
{
    public class GetUserQuery : IRequest<List<UserResponseDTO>> { }
}
