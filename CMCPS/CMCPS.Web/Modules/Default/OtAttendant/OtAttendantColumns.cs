
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.OtAttendant")]
    [BasedOnRow(typeof(Entities.OtAttendantRow), CheckNames = true)]
    public class OtAttendantColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OtAttendantId { get; set; }
        [EditLink]
        public String OtAttendantName { get; set; }
    }
}