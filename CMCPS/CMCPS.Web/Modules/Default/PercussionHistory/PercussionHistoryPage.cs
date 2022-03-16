
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/PercussionHistory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PercussionHistoryRow))]
    public class PercussionHistoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/PercussionHistory/PercussionHistoryIndex.cshtml");
        }
    }
}