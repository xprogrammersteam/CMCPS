
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Ward"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.WardRow))]
    public class WardController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Ward/WardIndex.cshtml");
        }
    }
}