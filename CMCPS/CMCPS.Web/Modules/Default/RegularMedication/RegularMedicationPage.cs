
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/RegularMedication"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RegularMedicationRow))]
    public class RegularMedicationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/RegularMedication/RegularMedicationIndex.cshtml");
        }
    }
}