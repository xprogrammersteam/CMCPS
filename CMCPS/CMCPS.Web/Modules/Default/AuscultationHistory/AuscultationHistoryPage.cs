
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/AuscultationHistory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AuscultationHistoryRow))]
    public class AuscultationHistoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/AuscultationHistory/AuscultationHistoryIndex.cshtml");
        }
    }
}