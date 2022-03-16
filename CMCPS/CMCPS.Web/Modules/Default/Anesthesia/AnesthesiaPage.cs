
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Anesthesia"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AnesthesiaRow))]
    public class AnesthesiaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Anesthesia/AnesthesiaIndex.cshtml");
        }
    }
}