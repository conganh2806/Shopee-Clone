namespace ShopeeClone.Backend.Application.DTOs
{
    public class CreateUserDTO
    {
        public string Username { get; set; } = default!;
        public string Password { get; set; } = default!;
        public string Email { get; set; } = default!;
        public string FullName { get; set; } = default!;
        public string Avatar { get; set; } = default!;
        public List<string> Roles { get; set; } = new List<string>();
    }
}
