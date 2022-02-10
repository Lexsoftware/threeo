using Threeo.Models;

namespace Threeo.Repository
{
    public interface IUserRepository
    {
        User Get(string email, string password);
    }
}
