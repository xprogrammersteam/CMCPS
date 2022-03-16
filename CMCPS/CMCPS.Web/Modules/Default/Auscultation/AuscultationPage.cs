
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Auscultation"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AuscultationRow))]
    public class AuscultationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Auscultation/AuscultationIndex.cshtml");
        }
    }
}