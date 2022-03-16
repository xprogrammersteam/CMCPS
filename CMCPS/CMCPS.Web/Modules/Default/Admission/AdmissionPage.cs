
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Admission"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AdmissionRow))]
    public class AdmissionController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Admission/AdmissionIndex.cshtml");
        }
    }
}