
namespace CMCPS.Default.Repositories
{
    using CMCPS.Default.Entities;
    using CMCPS.Modules.Common;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.ComplicationRow;

    public class ComplicationRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.Doctor = GetCurrentUserName.GetCurrentUser();
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

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> {
            protected override void BeforeSave()
            {
                base.BeforeSave();
                if (IsCreate)
                {
                    if (!this.Connection.Exists<ComplicationRow>(MyRow.Fields.AdmissionId == Convert.ToString(Request.Entity.AdmissionId.Value)))
                    {
                        // do anything you want to do
                    }
                    else
                    {
                        throw new ValidationError("This patient for complication already inserted.");
                    }
                }

            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}