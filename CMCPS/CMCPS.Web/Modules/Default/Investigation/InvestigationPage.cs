
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Investigation"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.InvestigationRow))]
    public class InvestigationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Investigation/InvestigationIndex.cshtml");
        }
    }
}