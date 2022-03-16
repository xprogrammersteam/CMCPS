
namespace CMCPS.Common.Pages
{
    using Northwind;
    using Northwind.Entities;
    using Serenity;
    using Serenity.Data;
    using System;
    using System.Web.Mvc;
    using CMCPS.Default.Entities;
    

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(5),
                AdmissionRow.Fields.GenerationKey, () =>
                {
                    var model = new DashboardPageModel();
                    var o = AdmissionRow.Fields;
                    using (var connection = SqlConnections.NewFor<AdmissionRow>())
                    {
                        model.OpenOrders = connection.Count<AdmissionRow>(o.Date == DateTime.Now.Date);
                        //var date = Convert.ToDateTime(o.Date).ToString("MMM");
                        //var month = DateTime.Now.Month;
                        model.ClosedOrderPercent = 1;
                        model.CustomerCount = connection.Count<AdmissionRow>();
                        model.ProductCount = connection.Count<AdmissionRow>();
                    }
                    return model;
                });
            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
        }
        public ActionResult Count()
        {
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(5),
                OrderRow.Fields.GenerationKey, () =>
                {
                    var model = new DashboardPageModel();
                    var o = OrderRow.Fields;
                    using (var connection = SqlConnections.NewFor<OrderRow>())
                    {
                        model.OpenOrders = connection.Count<OrderRow>(o.ShippingState == (int)OrderShippingState.NotShipped);
                        var closedOrders = connection.Count<OrderRow>(o.ShippingState == (int)OrderShippingState.Shipped);
                        var totalOrders = model.OpenOrders + closedOrders;
                        model.ClosedOrderPercent = (int)Math.Round(totalOrders == 0 ? 100 :
                            ((double)closedOrders / (double)totalOrders * 100));
                        model.CustomerCount = connection.Count<CustomerRow>();
                        model.ProductCount = connection.Count<ProductRow>();
                    }
                    return model;
                });
            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
        }
    }
}
