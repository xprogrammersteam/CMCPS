
using Serenity.Navigation;

namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using CMCPS.Modules.Default.Admission;
    using Serenity.Data.Mapping;

    [ColumnsScript("Default.Admission")]
    [DisplayName("Admission"), InstanceName("Admission")]
    [BasedOnRow(typeof(Entities.AdmissionRow), CheckNames = true)]
    public class AdmissionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 AdmissionId { get; set; }
        [EditLink]
        [Width(150),QuickSearch]
        public String Name { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        [Width(170), DisplayName("Date of Admission")]
        public DateTime Date { get; set; }
        [Width(150)]
        public String FatherName { get; set; }
        [Width(50)]
        public String Age { get; set; }
        [Width(50)]
        public String Sex { get; set; }
        [Width(100)]
        public Int32 Weight { get; set; }
        [Width(100), QuickFilter(CssClass = "hidden-xs")]
        public String UnitNumber { get; set; }
        [Width(100),QuickSearch]
        public String PinNumber { get; set; }
        [Width(210)]
        public String HospitalRegNumber { get; set; }
        
        [Width(170),DisplayName("Date of Discharge")]
        public DateTime DischargeDate { get; set; }
        [Width(450)]
        public String FinalDiagnosis { get; set; }
    }
}