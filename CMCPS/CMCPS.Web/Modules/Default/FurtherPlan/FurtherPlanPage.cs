
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/FurtherPlan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FurtherPlanRow))]
    public class FurtherPlanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/FurtherPlan/FurtherPlanIndex.cshtml");
        }
    }
}