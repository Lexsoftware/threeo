using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Threeo.Models;
using Threeo.Repository;

namespace Threeo.Controllers
{
    public class AuthController : Controller
    {
        private readonly IUserRepository _repository;

        public AuthController(IUserRepository repository) => _repository = repository;


        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<object>> Login([FromBody] LoginInput model)
        {

            try
            {
                var user = _repository.Get(model.Email, model.Password);

                if (user == null)
                    return NotFound(new { message = "Usuário ou senha inválidos" });


                var token = GenerateToken(user);

                return Ok(new { token });
            }
            catch (Exception ex)
            {
                //logger ex
                return BadRequest();
            }
        }

        private string GenerateToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(Environment.GetEnvironmentVariable("secret"));
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Email.ToString()),
                    new Claim(ClaimTypes.Role, user.Role.ToString())
                }),
                Expires = DateTime.UtcNow.AddHours(2),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
