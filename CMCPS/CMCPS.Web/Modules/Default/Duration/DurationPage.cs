
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Duration"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DurationRow))]
    public class DurationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Duration/DurationIndex.cshtml");
        }
    }
}