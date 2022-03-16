
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/PostNatal"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PostNatalRow))]
    public class PostNatalController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/PostNatal/PostNatalIndex.cshtml");
        }
    }
}