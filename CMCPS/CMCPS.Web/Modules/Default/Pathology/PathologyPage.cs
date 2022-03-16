
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Pathology"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PathologyRow))]
    public class PathologyController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Pathology/PathologyIndex.cshtml");
        }
    }
}