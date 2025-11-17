using Ardalis.GuardClauses;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ShopeeClone.Backend.Application.Common.Interfaces;
using ShopeeClone.Backend.Application.DTOs;
using ShopeeClone.Backend.Infrastructure.Identity.Models;

namespace ShopeeClone.Backend.Infrastructure.Services
{
    public class IdentityService : IIdentityService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public IdentityService(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            RoleManager<IdentityRole> roleManager
        )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
        }

        public async Task<List<UserResponseDTO>> GetAllUsersAsync()
        {
            return await _userManager
                .Users.Select(u => new UserResponseDTO
                {
                    Id = u.Id,
                    FullName = u.FullName,
                    UserName = u.UserName ?? "",
                    Email = u.Email ?? "",
                    Avatar = u.Avatar,
                    PhoneNumber = u.PhoneNumber ?? ""
                })
                .ToListAsync();
        }

        public async Task<UserDetailsDTO> GetUserDetailsByUsernameAsync(
            string username,
            CancellationToken cancellationToken
        )
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.UserName == username);

            if (user == null)
            {
                throw new NotFoundException("user:notfound", "User not found");
            }

            var roles = await _userManager.GetRolesAsync(user);
            return new UserDetailsDTO
            {
                UserId = user.Id,
                FullName = user.FullName,
                Username = user.UserName ?? "",
                PhoneNumber = user.PhoneNumber ?? "",
                Avatar = user.Avatar,
                Roles = roles.ToList()
            };
        }

        public async Task<bool> SigninUserAsync(string userName, string password)
        {
            var result = await _signInManager.PasswordSignInAsync(
                userName,
                password,
                false,
                lockoutOnFailure: false
            );

            return result.Succeeded;
        }

        public async Task<bool> CreateUserAsync(CreateUserDTO createUserDTO)
        {
            var user = new ApplicationUser
            {
                UserName = createUserDTO.Username,
                Email = createUserDTO.Email,
                FullName = createUserDTO.FullName,
            };

            var result = _userManager.CreateAsync(user, createUserDTO.Password).Result;

            if (!result.Succeeded)
            {
                throw new Authentication.Application.Common.Exceptions.ValidationException(
                    result.Errors
                );
            }

            var addUserRoles = await _userManager.AddToRolesAsync(user, createUserDTO.Roles);
            if (!addUserRoles.Succeeded)
            {
                throw new Authentication.Application.Common.Exceptions.ValidationException(
                    addUserRoles.Errors
                );
            }

            return result.Succeeded;
        }
    }
}
