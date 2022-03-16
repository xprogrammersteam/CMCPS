
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Bed")]
    [BasedOnRow(typeof(Entities.BedRow), CheckNames = true)]
    public class BedColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BedId { get; set; }
        [EditLink]
        public String BedNumber { get; set; }
        public String Note { get; set; }
    }
}