
namespace CMC.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/IllnessHistory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.IllnessHistoryRow))]
    public class IllnessHistoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/IllnessHistory/IllnessHistoryIndex.cshtml");
        }
    }
}