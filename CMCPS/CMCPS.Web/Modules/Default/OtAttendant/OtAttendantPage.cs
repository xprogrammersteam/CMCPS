
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/OtAttendant"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OtAttendantRow))]
    public class OtAttendantController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/OtAttendant/OtAttendantIndex.cshtml");
        }
    }
}