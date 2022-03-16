
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Bed"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BedRow))]
    public class BedController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Bed/BedIndex.cshtml");
        }
    }
}