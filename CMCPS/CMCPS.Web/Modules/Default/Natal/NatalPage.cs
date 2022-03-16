
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Natal"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.NatalRow))]
    public class NatalController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Natal/NatalIndex.cshtml");
        }
    }
}