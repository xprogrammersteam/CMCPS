
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/VocalResonanceHistory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VocalResonanceHistoryRow))]
    public class VocalResonanceHistoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/VocalResonanceHistory/VocalResonanceHistoryIndex.cshtml");
        }
    }
}