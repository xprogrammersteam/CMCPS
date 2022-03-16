
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Indication"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.IndicationRow))]
    public class IndicationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Indication/IndicationIndex.cshtml");
        }
    }
}