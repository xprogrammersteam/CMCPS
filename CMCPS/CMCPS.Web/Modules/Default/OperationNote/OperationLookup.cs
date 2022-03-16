
namespace CMCPS.Default.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Default.OperationNote")]
    public class OperationLookup : RowLookupScript<OperationNoteRow>
    {
        public OperationLookup()
        {
            IdField = OperationNoteRow.Fields.Id.PropertyName;
            TextField = OperationNoteRow.Fields.OperationName.PropertyName;
            //TextField = AdmissionRow.Fields.PatientType.PropertyName;
        }
        //protected override void PrepareQuery(SqlQuery query)
        //{
        //    var fld = OperationNoteRow.Fields;
        //    query.Select(fld.OperationId, fld.OperationName)
        //        .Where(fld.OperationId ==);

        //}
    }
}