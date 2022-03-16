
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Operation"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OperationRow))]
    public class OperationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Operation/OperationIndex.cshtml");
        }
    }
}