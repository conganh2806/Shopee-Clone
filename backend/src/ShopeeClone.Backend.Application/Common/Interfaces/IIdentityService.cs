using ShopeeClone.Backend.Application.DTOs;

namespace ShopeeClone.Backend.Application.Common.Interfaces
{
    public interface IIdentityService
    {
        Task<List<UserResponseDTO>> GetAllUsersAsync();
        Task<bool> SigninUserAsync(string userName, string password);
        Task<UserDetailsDTO> GetUserDetailsByUsernameAsync(
            string username,
            CancellationToken cancellationToken
        );
        Task<bool> CreateUserAsync(CreateUserDTO createUserDTO);
    }
}
