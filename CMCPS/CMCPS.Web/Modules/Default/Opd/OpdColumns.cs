
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Opd")]
    [BasedOnRow(typeof(Entities.OpdRow), CheckNames = true)]
    public class OpdColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 OpdId { get; set; }
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public DateTime Date { get; set; }
        [Width(100)]
        public String Age { get; set; }
        [Width(100)]
        public String Sex { get; set; }
        [Width(100)]
        public String BodyWt { get; set; }
        [Width(150)]
        public String DistrictName { get; set; }
        [Width(200)]
        public String UniNo { get; set; }
        [Width(150)]
        public String PinNo { get; set; }
        [Width(200)]
        public String Mobile { get; set; }
        [Width(150)]
        public String RegNo { get; set; }
        [Width(150)]
        public String PatientType { get; set; }

    }
}