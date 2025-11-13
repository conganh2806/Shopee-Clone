using MediatR;
using Microsoft.AspNetCore.Mvc;
using ShopeeClone.Backend.Application.Features.Auth;

namespace ShopeeClone.Backend.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ISender _sender;

        public AuthController(ISender sender)
        {
            _sender = sender;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterRequest request)
        {
            try
            {
                var command = new RegisterCommand(
                    request.Phone,
                    request.Password,
                    request.ConfirmPassword
                );

                var result = await _sender.Send(command);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequest request)
        {
            try
            {
                var query = new LoginQuery(request.Phone, request.Password);
                var result = await _sender.Send(query);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }
    }

    public record RegisterRequest(string Phone, string Password, string ConfirmPassword);

    public record LoginRequest(string Phone, string Password);
}
