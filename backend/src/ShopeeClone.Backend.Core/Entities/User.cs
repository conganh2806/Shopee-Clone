namespace ShopeeClone.Backend.Core.Entities
{
    public class User : BaseEntity
    {
        public string Phone { get; set; } = default!;
        public string PasswordHash { get; set; } = default!;
        public string Avatar { get; set; } = "https://i.imgur.com/6VBx3io.png";
    }
}
