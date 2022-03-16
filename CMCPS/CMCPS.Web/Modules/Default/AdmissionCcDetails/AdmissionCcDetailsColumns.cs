
namespace CMCPS.Default.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Default.AdmissionCcDetails")]
    [BasedOnRow(typeof(Entities.AdmissionCcDetailsRow), CheckNames = true)]
    public class AdmissionCcDetailsColumns
    {
        
        [EditLink]
        public String PComplaints { get; set; }
        
        public String Days { get; set; }
    }
}