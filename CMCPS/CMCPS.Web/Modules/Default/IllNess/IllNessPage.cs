
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/IllNess"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.IllNessRow))]
    public class IllNessController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/IllNess/IllNessIndex.cshtml");
        }
    }
}