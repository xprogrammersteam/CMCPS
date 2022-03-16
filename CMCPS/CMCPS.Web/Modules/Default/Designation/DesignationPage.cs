
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Designation"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DesignationRow))]
    public class DesignationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Designation/DesignationIndex.cshtml");
        }
    }
}