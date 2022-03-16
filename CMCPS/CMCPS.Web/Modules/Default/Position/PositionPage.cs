
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Position"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PositionRow))]
    public class PositionController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Position/PositionIndex.cshtml");
        }
    }
}