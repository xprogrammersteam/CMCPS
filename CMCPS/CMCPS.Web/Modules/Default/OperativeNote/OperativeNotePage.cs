
namespace CMCPS.Default.Pages
{
    using System.Web.Mvc;

    [RoutePrefix("Default/OperativeNote"), Route("{action=index}")]

    public class OperativeNoteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/OperativeNote/OperativeNoteIndex.cshtml");
            
        }
    }
}