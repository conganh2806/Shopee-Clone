namespace ShopeeClone.Backend.Application.DTOs
{
    public class AuthResponseDTO
    {
        public string UserId { get; set; } = default!;
        public string FullName { get; set; } = default!;
        public string Token { get; set; } = default!;
    }
}
