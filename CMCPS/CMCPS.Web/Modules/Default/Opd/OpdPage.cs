
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Opd"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OpdRow))]
    public class OpdController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Opd/OpdIndex.cshtml");
        }
    }
}