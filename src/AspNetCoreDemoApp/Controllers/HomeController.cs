using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreDemoApp.Controllers
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