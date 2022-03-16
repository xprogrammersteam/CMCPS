
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/PNote"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PNoteRow))]
    public class PNoteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/PNote/PNoteIndex.cshtml");
        }
    }
}