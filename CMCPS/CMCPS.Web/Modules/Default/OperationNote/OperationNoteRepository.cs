
namespace CMCPS.Default.Repositories
{
    using CMCPS.Default.Entities;
    using CMCPS.Modules.Common;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.OperationNoteRow;


    public class OperationNoteRepository
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

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void BeforeSave()
            {
                base.BeforeSave();
                if (Request.Entity.IsView==true)
                {
                    var opList = this.Connection.List<OperationNoteRow>(q => q
                      .SelectTableFields()
                      .Select(MyRow.Fields.OperationName)
                      .Where(MyRow.Fields.AdmissionId == Convert.ToInt32(this.Row.AdmissionId)));

                    foreach (var item in opList)
                    {
                        var opNote = this.Connection.ById<OperationNoteRow>(item.Id);
                        if (opNote.IsView == true)
                        {
                            opNote.IsView = false;
                            Connection.UpdateById(opNote, ExpectedRows.One);
                        }
                    }
                }
                
            }
            protected override void AfterSave()
            {
                base.AfterSave();

                if (IsCreate)
                {
                    if (Request.Entity.IsView == true)
                    {
                        var admissionEntityrow = this.Connection.ById<AdmissionRow>(this.Row.AdmissionId);
                        admissionEntityrow.OperationId = Request.Entity.OperationId.Value;
                        admissionEntityrow.OperationNoteId = Request.Entity.Id.Value;
                        Connection.UpdateById(admissionEntityrow, ExpectedRows.One);
                    }

                }
                if (IsUpdate)
                {
                    var admissionEntityrow = this.Connection.ById<AdmissionRow>(this.Row.AdmissionId);
                    if (Request.Entity.IsView == true)
                    {
                        admissionEntityrow.OperationId = Request.Entity.OperationId.Value;
                        admissionEntityrow.OperationNoteId = Request.Entity.Id.Value;
                        Connection.UpdateById(admissionEntityrow, ExpectedRows.One);
                    }
                    else
                    {
                        admissionEntityrow.OperationId = null;
                        admissionEntityrow.OperationNoteId = null;
                        Connection.UpdateById(admissionEntityrow, ExpectedRows.One);
                    }
                }
            }

        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            protected override void OnAfterDelete()
            {
                base.OnAfterDelete();
                if (this.Row.IsView==true)
                {
                    var admissionEntityrow = this.Connection.ById<AdmissionRow>(this.Row.AdmissionId);
                    admissionEntityrow.OperationId = null;
                    admissionEntityrow.OperationNoteId = null;
                    Connection.UpdateById(admissionEntityrow, ExpectedRows.One);
                }
               
            }
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {

        }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}