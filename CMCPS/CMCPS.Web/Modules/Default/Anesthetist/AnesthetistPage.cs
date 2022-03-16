
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Anesthetist"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AnesthetistRow))]
    public class AnesthetistController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Anesthetist/AnesthetistIndex.cshtml");
        }
    }
}