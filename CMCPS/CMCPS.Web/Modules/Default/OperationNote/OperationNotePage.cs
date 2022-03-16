
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/OperationNote"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OperationNoteRow))]
    public class OperationNoteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/OperationNote/OperationNoteIndex.cshtml");
        }
    }
}