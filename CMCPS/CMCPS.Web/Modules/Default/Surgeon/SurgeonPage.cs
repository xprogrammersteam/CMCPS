
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Surgeon"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SurgeonRow))]
    public class SurgeonController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Surgeon/SurgeonIndex.cshtml");
        }
    }
}