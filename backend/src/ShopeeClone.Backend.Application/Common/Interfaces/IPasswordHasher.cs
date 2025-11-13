namespace ShopeeClone.Backend.Application.Common.Interfaces
{
    public interface IPasswordHasher : IScopedService
    {
        string HashPassword(string password);
        bool VerifyHashedPassword(string hashedPassword, string providedPassword);
    }
}
