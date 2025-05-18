using Microsoft.AspNetCore.Mvc;
using SocialGame.Core.Models;
using System;
using System.Threading.Tasks;

namespace SocialGame.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            try
            {
                // TODO: Add actual user registration logic
                var user = new User
                {
                    Id = Guid.NewGuid(),
                    Username = request.Username,
                    Email = request.Email,
                    PasswordHash = request.Password, // TODO: Hash password
                    CreatedAt = DateTime.UtcNow,
                    XP = 0,
                    Level = 1,
                    IsPremium = false
                };

                return CreatedAtAction(nameof(Register), new { id = user.Id }, new { message = "User registered successfully" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            try
            {
                // TODO: Add actual user authentication logic
                if (request.Email == "test@example.com" && request.Password == "password")
                {
                    var user = new User
                    {
                        Id = Guid.NewGuid(),
                        Username = "testuser",
                        Email = request.Email,
                        XP = 100,
                        Level = 2,
                        IsPremium = false
                    };

                    return Ok(new
                    {
                        user = new
                        {
                            id = user.Id,
                            username = user.Username,
                            email = user.Email,
                            xp = user.XP,
                            level = user.Level,
                            isPremium = user.IsPremium
                        },
                        token = "dummy-token" // TODO: Generate actual JWT token
                    });
                }

                return Unauthorized(new { message = "Invalid email or password" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }

    public class RegisterRequest
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
} 