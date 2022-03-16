
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/SpecialNote"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SpecialNoteRow))]
    public class SpecialNoteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/SpecialNote/SpecialNoteIndex.cshtml");
        }
    }
}