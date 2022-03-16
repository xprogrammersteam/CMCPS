
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/OtSister"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OtSisterRow))]
    public class OtSisterController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/OtSister/OtSisterIndex.cshtml");
        }
    }
}