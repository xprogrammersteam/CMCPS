
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Immunization"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ImmunizationRow))]
    public class ImmunizationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Immunization/ImmunizationIndex.cshtml");
        }
    }
}