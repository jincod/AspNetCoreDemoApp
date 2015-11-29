using Microsoft.AspNet.Mvc;

namespace AspNet5DemoApp.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
    }
}