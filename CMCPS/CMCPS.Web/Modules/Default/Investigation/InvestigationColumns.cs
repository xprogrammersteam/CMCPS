
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serenity.Data.Mapping;

    [ColumnsScript("Default.Investigation")]
    [BasedOnRow(typeof(Entities.InvestigationRow), CheckNames = true)]
    public class InvestigationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 InvestigationId { get; set; }
        [EditLink]
        [Width(150), QuickSearch]
        public String Name { get; set; }
        [Width(170),QuickFilter(CssClass = "hidden-xs")]
        public DateTime EntryDate { get; set; }
        [Width(50)]
        public String Age { get; set; }
        [Width(100)]
        public String Sex { get; set; }
        [Width(100)]
        public Int32 Weight { get; set; }
        [Width(100), QuickFilter(CssClass = "hidden-xs")]
        public String UnitNumber { get; set; }
        [Width(100), QuickSearch]
        public String PinNumber { get; set; }
        [Width(210)]
        public String HospitalRegNo { get; set; }
    }
}