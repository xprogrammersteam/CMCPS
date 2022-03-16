
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/ImmunizationHistory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ImmunizationHistoryRow))]
    public class ImmunizationHistoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/ImmunizationHistory/ImmunizationHistoryIndex.cshtml");
        }
    }
}