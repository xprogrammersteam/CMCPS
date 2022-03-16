
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Meals"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MealsRow))]
    public class MealsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Meals/MealsIndex.cshtml");
        }
    }
}