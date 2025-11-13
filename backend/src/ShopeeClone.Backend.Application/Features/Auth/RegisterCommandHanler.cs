using MediatR;
using ShopeeClone.Backend.Application.Common;
using ShopeeClone.Backend.Application.Common.Interfaces;

namespace ShopeeClone.Backend.Application.Features.Auth
{
    public class RegisterCommandHanler : IRequestHandler<RegisterCommand, AuthResult>
    {
        private readonly IUserRepository _userRepository;
        private readonly IPasswordHasher _passwordHasher;
        private readonly IJwtTokenGenerator _jwtTokenGenerator;

        public RegisterCommandHanler(
            IUserRepository userRepository,
            IPasswordHasher passwordHasher,
            IJwtTokenGenerator jwtTokenGenerator
        )
        {
            _userRepository = userRepository;
            _passwordHasher = passwordHasher;
            _jwtTokenGenerator = jwtTokenGenerator;
        }

        public async Task<AuthResult> Handle(
            RegisterCommand request,
            CancellationToken cancellationToken
        )
        {
            if (
                await _userRepository.GetUserByPhoneAsync(request.Phone, cancellationToken)
                is not null
            )
            {
                throw new Exception("Số điện thoại đã tồn tại.");
            }

            if (request.Password != request.ConfirmPassword)
            {
                throw new Exception("Mật khẩu không khớp.");
            }

            var passwordHash = _passwordHasher.HashPassword(request.Password);

            var user = new Core.Entities.User
            {
                Phone = request.Phone,
                PasswordHash = passwordHash
            };

            await _userRepository.AddUserAsync(user, cancellationToken);

            var token = _jwtTokenGenerator.GenerateToken(user.Id, user.Phone);

            return new AuthResult(user, token);
        }
    }
}
