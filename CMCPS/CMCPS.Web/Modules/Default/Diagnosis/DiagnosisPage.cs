
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Diagnosis"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DiagnosisRow))]
    public class DiagnosisController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Diagnosis/DiagnosisIndex.cshtml");
        }
    }
}