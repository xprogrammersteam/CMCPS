
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Antenatal"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AntenatalRow))]
    public class AntenatalController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Antenatal/AntenatalIndex.cshtml");
        }
    }
}