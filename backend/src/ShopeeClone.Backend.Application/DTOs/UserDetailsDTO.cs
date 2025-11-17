namespace ShopeeClone.Backend.Application.DTOs
{
    public class UserDetailsDTO
    {
        public string UserId { get; set; } = default!;
        public string FullName { get; set; } = default!;
        public string Username { get; set; } = default!;
        public string PhoneNumber { get; set; } = default!;
        public string? Avatar { get; set; }
        public IList<string> Roles { get; set; } = new List<string>();
    }
}
