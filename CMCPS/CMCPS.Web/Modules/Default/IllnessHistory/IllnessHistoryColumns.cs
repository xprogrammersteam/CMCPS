
namespace CMC.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.IllnessHistory")]
    [BasedOnRow(typeof(Entities.IllnessHistoryRow), CheckNames = true)]
    public class IllnessHistoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IllnessHistoryId { get; set; }
        public Int32 AdmissionId { get; set; }
        public Int32 IllnessId { get; set; }
    }
}