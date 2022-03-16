
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Diagram"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DiagramRow))]
    public class DiagramController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Diagram/DiagramIndex.cshtml");
        }
    }
}