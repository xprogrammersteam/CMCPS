
namespace CMCPS.Default.Repositories
{
    using CMCPS.Default.Entities;
    using CMCPS.Modules.Common.Reporting;
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.InvestigationRow;

    public class InvestigationRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }
        public static RetrieveResponse<MyRow> RetrieveBy(int AdmissionId)
        {
            RetrieveRequest request = new RetrieveRequest();
            request.EntityId = AdmissionId;
            
            return new MyRetrieveHandler().Process(SqlConnections.NewByKey("Default"), request);
        }
       
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void BeforeSave()
            {
                base.BeforeSave();
                if (IsCreate)
                {
                    if (!this.Connection.Exists<InvestigationRow>(MyRow.Fields.AdmissionId == Convert.ToString(Request.Entity.AdmissionId.Value)))
                    {
                        // do anything you want to do
                    }
                    else
                    {
                        throw new ValidationError("This patient for investigation already inserted.");
                    }
                }

            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> {
            protected override void OnReturn()
            {
                base.OnReturn();

                var mc = InvestigationRow.Fields;
                Row.InvestigationCast = Connection.List<Entities.InvestigationRow>(q => q
                    .SelectTableFields()
                    .Select(mc.Calcium)
                    .Where(mc.AdmissionId == Convert.ToString(Row.AdmissionId)));
            }
        }
        private class MyListHandler : ListRequestHandler<MyRow> { }

        public class AdmissionReq : ServiceRequest, IIncludeExcludeColumns
        {
            public object AdmissionId { get; set; }
            public RetrieveColumnSelection ColumnSelection { get; set; }
            [JsonConverter(typeof(JsonStringHashSetConverter))]
            public HashSet<string> IncludeColumns { get; set; }
            [JsonConverter(typeof(JsonStringHashSetConverter))]
            public HashSet<string> ExcludeColumns { get; set; }
        }
    }
}