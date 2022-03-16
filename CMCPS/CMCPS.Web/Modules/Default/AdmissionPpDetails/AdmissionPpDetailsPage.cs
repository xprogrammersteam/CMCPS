
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/AdmissionPpDetails"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AdmissionPpDetailsRow))]
    public class AdmissionPpDetailsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/AdmissionPpDetails/AdmissionPpDetailsIndex.cshtml");
        }
    }
}