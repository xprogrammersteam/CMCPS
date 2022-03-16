
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Complication")]
    [BasedOnRow(typeof(Entities.ComplicationRow)/*, CheckNames = true*/)]
    public class ComplicationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 ComplicationId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public DateTime EntryDate { get; set; }
        [Width(50)]
        public String Age { get; set; }
        public String Sex { get; set; }
        public String PinNumber { get; set; }
        public String UnitNumber { get; set; }
        public String UnitRegNo { get; set; }
        public String HospitalRegNo { get; set; }
        public String FinalDiagnosis { get; set; }
        [DisplayName("Name of Operation")]
        public String OperationName { get; set; }

        [DisplayName("Complication")]
        public String ComplicationName { get; set; }
    }
}