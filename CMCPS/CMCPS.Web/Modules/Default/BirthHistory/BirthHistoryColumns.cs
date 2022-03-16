
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.BirthHistory")]
    [BasedOnRow(typeof(Entities.BirthHistoryRow), CheckNames = true)]
    public class BirthHistoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BirthHistoryId { get; set; }
        [EditLink]
        public String BirthHistory { get; set; }
        public String Note { get; set; }
    }
}