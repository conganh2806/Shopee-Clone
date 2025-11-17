using MediatR;

namespace ShopeeClone.Backend.Application.Commands.User
{
    public class CreateUserCommand : IRequest<bool>
    {
        public string FullName { get; set; } = default!;
        public string UserName { get; set; } = default!;
        public string Email { get; set; } = default!;
        public string Password { get; set; } = default!;
        public string ConfirmationPassword { get; set; } = default!;
        public List<string> Roles { get; set; } = new List<string>();
    }
}
