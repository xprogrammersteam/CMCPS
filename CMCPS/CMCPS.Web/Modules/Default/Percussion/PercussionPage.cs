
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Percussion"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PercussionRow))]
    public class PercussionController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Percussion/PercussionIndex.cshtml");
        }
    }
}