
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/FamilyHistory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FamilyHistoryRow))]
    public class FamilyHistoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/FamilyHistory/FamilyHistoryIndex.cshtml");
        }
    }
}