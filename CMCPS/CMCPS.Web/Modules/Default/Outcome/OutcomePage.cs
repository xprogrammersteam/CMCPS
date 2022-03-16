
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Outcome"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OutcomeRow))]
    public class OutcomeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Outcome/OutcomeIndex.cshtml");
        }
    }
}