using System.Collections.Generic;
using System.Linq;
using Threeo.Models;

namespace Threeo.Repository
{
    public class UserRepository : IUserRepository
    {
        public User Get(string email, string password)
        {
            var users = new List<User>();
            users.Add(new User { Id = 1, Email = "bruno@threeo.com.br", Password = "bruno", Role = "architect" });
            users.Add(new User { Id = 2, Email = "heleno@threeo.com.br", Password = "heleno", Role = "developer" });
            users.Add(new User { Id = 3, Email = "eduardo@threeo.com.br", Password = "eduardo", Role = "manager" });

            return users.Where(x => x.Email.ToLower() == email.ToLower() && x.Password == password).FirstOrDefault();
        }
    }
}
