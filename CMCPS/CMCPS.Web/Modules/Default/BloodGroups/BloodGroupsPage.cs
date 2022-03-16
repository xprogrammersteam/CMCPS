
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/BloodGroups"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BloodGroupsRow))]
    public class BloodGroupsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/BloodGroups/BloodGroupsIndex.cshtml");
        }
    }
}