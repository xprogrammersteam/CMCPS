
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/BreathSound"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BreathSoundRow))]
    public class BreathSoundController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/BreathSound/BreathSoundIndex.cshtml");
        }
    }
}