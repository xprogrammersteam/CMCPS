
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/OtherLab"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OtherLabRow))]
    public class OtherLabController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/OtherLab/OtherLabIndex.cshtml");
        }
    }
}