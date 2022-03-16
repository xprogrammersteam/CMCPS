using Serenity.Services;

namespace CMCPS.Northwind
{
    public class OrderListRequest : ListRequest 
    {
        public int? ProductID { get; set; }
    }
}