
namespace CMCPS.Default.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Default.Admission")]
    public class PatientLookup : RowLookupScript<AdmissionRow>
    {
        public PatientLookup()
        {
            IdField = AdmissionRow.Fields.AdmissionId.PropertyName;
            TextField = AdmissionRow.Fields.NameAndPin.PropertyName;
            //TextField = AdmissionRow.Fields.PatientType.PropertyName;
        }
        //protected override void PrepareQuery(SqlQuery query)
        //{
        //    var fld = AdmissionRow.Fields;
        //    query.Select(fld.NameAndPin, fld.AdmissionId);
               
        //}
    }
}