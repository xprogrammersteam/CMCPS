
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.PresentingComplaints")]
    [BasedOnRow(typeof(Entities.PresentingComplaintsRow), CheckNames = true)]
    public class PresentingComplaintsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PComplaintsId { get; set; }
        [EditLink]
        public String PComplaints { get; set; }
        public String Note { get; set; }
    }
}