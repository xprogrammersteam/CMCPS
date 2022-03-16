
namespace CMCPS.Default.Repositories
{
    using CMCPS.Default.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Web;
    using MyRow = Entities.DischargeRow;

    public class DischargeRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
           // request.Entity.Advice = HttpUtility.HtmlEncode(request.Entity.Advice);
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
           // request.Entity.Advice = HttpUtility.HtmlEncode(request.Entity.Advice);
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
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
                    if (!this.Connection.Exists<DischargeRow>(MyRow.Fields.AdmissionId == Convert.ToString(Request.Entity.AdmissionId.Value)))
                    {
                        // do anything you want to do
                    }
                    else
                    {
                        throw new ValidationError("This patient for discharge already saved.");
                    }
                }

            }
            protected override void AfterSave()
            {
                base.AfterSave();
                if (IsCreate)
                {
                    var admissionEntityrow = this.Connection.ById<AdmissionRow>(this.Row.AdmissionId);
                    admissionEntityrow.PatientType = false;
                    Connection.UpdateById(admissionEntityrow, ExpectedRows.One);

                }
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}