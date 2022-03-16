
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/AssistantSurgeon"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssistantSurgeonRow))]
    public class AssistantSurgeonController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/AssistantSurgeon/AssistantSurgeonIndex.cshtml");
        }
    }
}