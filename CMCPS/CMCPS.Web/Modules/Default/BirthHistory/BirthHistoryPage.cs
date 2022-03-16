
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/BirthHistory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BirthHistoryRow))]
    public class BirthHistoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/BirthHistory/BirthHistoryIndex.cshtml");
        }
    }
}