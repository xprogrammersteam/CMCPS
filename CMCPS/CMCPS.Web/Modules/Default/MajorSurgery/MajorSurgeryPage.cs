
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/MajorSurgery"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MajorSurgeryRow))]
    public class MajorSurgeryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/MajorSurgery/MajorSurgeryIndex.cshtml");
        }
    }
}