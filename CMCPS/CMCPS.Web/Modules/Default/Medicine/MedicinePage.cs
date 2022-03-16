
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Medicine"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MedicineRow))]
    public class MedicineController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Medicine/MedicineIndex.cshtml");
        }
    }
}