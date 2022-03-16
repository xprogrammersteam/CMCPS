
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Histopathology"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.HistopathologyRow))]
    public class HistopathologyController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Histopathology/HistopathologyIndex.cshtml");
        }
    }
}