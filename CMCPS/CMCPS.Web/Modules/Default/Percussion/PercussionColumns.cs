
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Percussion")]
    [BasedOnRow(typeof(Entities.PercussionRow), CheckNames = true)]
    public class PercussionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PercussionId { get; set; }
        [EditLink]
        public String PercussionName { get; set; }
    }
}