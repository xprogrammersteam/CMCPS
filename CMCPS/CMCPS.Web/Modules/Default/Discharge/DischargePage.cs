
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Discharge"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DischargeRow))]
    public class DischargeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Discharge/DischargeIndex.cshtml");
        }
    }
}