
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/PresentingComplaints"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PresentingComplaintsRow))]
    public class PresentingComplaintsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/PresentingComplaints/PresentingComplaintsIndex.cshtml");
        }
    }
}