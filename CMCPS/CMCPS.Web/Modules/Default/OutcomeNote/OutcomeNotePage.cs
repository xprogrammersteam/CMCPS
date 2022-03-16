
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/OutcomeNote"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OutcomeNoteRow))]
    public class OutcomeNoteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/OutcomeNote/OutcomeNoteIndex.cshtml");
        }
    }
}