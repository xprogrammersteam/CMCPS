
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/District"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DistrictRow))]
    public class DistrictController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/District/DistrictIndex.cshtml");
        }
    }
}