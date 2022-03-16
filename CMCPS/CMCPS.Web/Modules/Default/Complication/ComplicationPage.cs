
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Complication"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ComplicationRow))]
    public class ComplicationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Complication/ComplicationIndex.cshtml");
        }
    }
}