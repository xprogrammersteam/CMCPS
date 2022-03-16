
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/FollowUp"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FollowUpRow))]
    public class FollowUpController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/FollowUp/FollowUpIndex.cshtml");
        }
    }
}