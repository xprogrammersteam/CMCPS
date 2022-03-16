
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Images"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ImagesRow))]
    public class ImagesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Images/ImagesIndex.cshtml");
        }
    }
}