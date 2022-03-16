
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.FollowUp")]
    [BasedOnRow(typeof(Entities.FollowUpRow)/*, CheckNames = true*/)]
    public class FollowUpColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 FollowUpId { get; set; }
        [EditLink, Width(150)]
        public String PatientName { get; set; }
        [Width(170), QuickFilter(CssClass = "hidden-xs")]
        public DateTime Date { get; set; }
        [Width(50)]
        public String Age { get; set; }
        [Width(100)]
        public String Sex { get; set; }
        [Width(100)]
        public Int32 Weight { get; set; }
        [Width(100), QuickFilter(CssClass = "hidden-xs")]
        public String UnitNumber { get; set; }
        [Width(100)]
        public String PinNumber { get; set; }
        [Width(210)]
        public String HospitalRegNo { get; set; }

    }
    
}