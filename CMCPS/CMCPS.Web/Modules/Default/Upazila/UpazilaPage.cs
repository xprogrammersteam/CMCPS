
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Upazila"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UpazilaRow))]
    public class UpazilaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Upazila/UpazilaIndex.cshtml");
        }
    }
}