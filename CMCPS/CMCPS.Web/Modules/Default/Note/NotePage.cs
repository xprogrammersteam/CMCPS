
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Note"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.NoteRow))]
    public class NoteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Note/NoteIndex.cshtml");
        }
    }
}