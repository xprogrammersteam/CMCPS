
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.PercussionHistory")]
    [BasedOnRow(typeof(Entities.PercussionHistoryRow), CheckNames = true)]
    public class PercussionHistoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PercussionHistoryId { get; set; }
        public Int32 AdmissionId { get; set; }
        public Int32 PercussionId { get; set; }
    }
}