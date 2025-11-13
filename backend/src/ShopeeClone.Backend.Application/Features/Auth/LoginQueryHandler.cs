using MediatR;
using ShopeeClone.Backend.Application.Common;
using ShopeeClone.Backend.Application.Common.Interfaces;

namespace ShopeeClone.Backend.Application.Features.Auth
{
    public class LoginQueryHandler : IRequestHandler<LoginQuery, AuthResult>
    {
        private readonly IUserRepository _userRepository;
        private readonly IPasswordHasher _passwordHasher;
        private readonly IJwtTokenGenerator _jwtTokenGenerator;

        public LoginQueryHandler(
            IUserRepository userRepository,
            IPasswordHasher passwordHasher,
            IJwtTokenGenerator jwtTokenGenerator
        )
        {
            _userRepository = userRepository;
            _passwordHasher = passwordHasher;
            _jwtTokenGenerator = jwtTokenGenerator;
        }

        public async Task<AuthResult> Handle(LoginQuery query, CancellationToken cancellationToken)
        {
            var user = await _userRepository.GetUserByPhoneAsync(query.Phone, cancellationToken);
            if (user is null)
            {
                throw new Exception("Số điện thoại hoặc mật khẩu không đúng.");
            }

            if (!_passwordHasher.VerifyHashedPassword(user.PasswordHash, query.Password))
            {
                throw new Exception("Số điện thoại hoặc mật khẩu không đúng.");
            }

            var token = _jwtTokenGenerator.GenerateToken(user.Id, user.Phone);

            return new AuthResult(user, token);
        }
    }
}
