
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Treatment"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TreatmentRow))]
    public class TreatmentController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Treatment/TreatmentIndex.cshtml");
        }
    }
}