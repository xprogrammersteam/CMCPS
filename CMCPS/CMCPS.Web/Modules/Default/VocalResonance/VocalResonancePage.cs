
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/VocalResonance"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VocalResonanceRow))]
    public class VocalResonanceController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/VocalResonance/VocalResonanceIndex.cshtml");
        }
    }
}