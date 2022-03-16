
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Doase"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DoaseRow))]
    public class DoaseController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Doase/DoaseIndex.cshtml");
        }
    }
}