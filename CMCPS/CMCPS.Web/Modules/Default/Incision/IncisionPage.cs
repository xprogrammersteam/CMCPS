
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Incision"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.IncisionRow))]
    public class IncisionController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Incision/IncisionIndex.cshtml");
        }
    }
}