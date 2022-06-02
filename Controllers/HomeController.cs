using DJSite.Data;
using DJSite.Models;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DJSite.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly DjSiteContext _context;
        private IWebHostEnvironment _environment;
        

       public HomeController(ILogger<HomeController> logger, DjSiteContext context, IWebHostEnvironment environment)
        {
            _logger = logger;
            _context = context;
            _environment = environment;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult ChangeLanguage(string language)
        {
            Response.Cookies.Append(
                CookieRequestCultureProvider.DefaultCookieName,
                CookieRequestCultureProvider.MakeCookieValue(new RequestCulture(language)),
                new CookieOptions { Expires = DateTimeOffset.UtcNow.AddYears(1) });
            return RedirectToAction("Index", "Home");
        }

        [HttpGet]
        public IActionResult GetImages()
        {
            List<string> images = new();
            try
            {
                string[] imagesPaths;
                imagesPaths = Directory.GetFiles(_environment.WebRootPath + "\\assets\\gallery\\");
                foreach (string imagePath in imagesPaths)
                {
                    images.Add(imagePath.Substring(imagePath.LastIndexOf('\\') + 1));
                }
            }
            catch (Exception e)
            {
                return Json(e);
            }

            return Json(images);
        }

        [HttpGet]
        public IActionResult GetAllSchedules()
        {
            var schedules = _context.Schedules;

            return Json(schedules);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}