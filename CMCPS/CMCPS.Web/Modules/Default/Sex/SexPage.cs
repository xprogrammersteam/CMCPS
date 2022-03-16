
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Sex"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SexRow))]
    public class SexController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Sex/SexIndex.cshtml");
        }
    }
}