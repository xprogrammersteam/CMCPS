
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.FamilyHistory")]
    [BasedOnRow(typeof(Entities.FamilyHistoryRow), CheckNames = true)]
    public class FamilyHistoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 FamilyHistoryId { get; set; }
        [EditLink]
        public String FamilyHistory { get; set; }
        public String Note { get; set; }
    }
}