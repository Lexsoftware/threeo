using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Threeo.Models;

namespace Threeo.Controllers
{
    [Authorize]
    public class CalculadoraController : Controller
    {
        [HttpPost]
        [Route("somar")]
        public decimal Somar([FromBody] Valores valores) => valores.PrimeiroNumero + valores.SegundoNumero;

        [HttpPost]
        [Route("multiplicar")]
        public decimal Multiplicacao([FromBody] Valores valores) => valores.PrimeiroNumero * valores.SegundoNumero;

        [HttpPost]
        [Route("dividir")]
        public decimal Divisao([FromBody] Valores valores) => valores.PrimeiroNumero / valores.SegundoNumero;

        [HttpPost]
        [Route("subtrair")]
        public decimal Subtracao([FromBody] Valores valores) => valores.PrimeiroNumero - valores.SegundoNumero;

        [HttpPost]
        [Route("soma-architect")]
        [Authorize(Roles = "architect")]
        public decimal SomaArchitect([FromBody] Valores valores) => valores.PrimeiroNumero + valores.SegundoNumero;
    }
}
