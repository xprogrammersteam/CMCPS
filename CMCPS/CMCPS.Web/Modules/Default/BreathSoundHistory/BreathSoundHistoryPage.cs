﻿
namespace CMCPS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/BreathSoundHistory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BreathSoundHistoryRow))]
    public class BreathSoundHistoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/BreathSoundHistory/BreathSoundHistoryIndex.cshtml");
        }
    }
}