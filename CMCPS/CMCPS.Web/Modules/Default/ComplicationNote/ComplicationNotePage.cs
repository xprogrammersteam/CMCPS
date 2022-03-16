
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/ComplicationNote"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ComplicationNoteRow))]
    public class ComplicationNoteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/ComplicationNote/ComplicationNoteIndex.cshtml");
        }
    }
}