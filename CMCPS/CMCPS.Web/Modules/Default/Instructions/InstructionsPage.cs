
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Instructions"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.InstructionsRow))]
    public class InstructionsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Instructions/InstructionsIndex.cshtml");
        }
    }
}