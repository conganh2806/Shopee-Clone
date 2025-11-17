using Microsoft.AspNetCore.Identity;

namespace ShopeeClone.Backend.Infrastructure.Identity.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Avatar { get; set; } = "https://i.imgur.com/6VBx3io.png";
        public string FullName { get; set; } = default!;
    }
}
