
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.AuscultationHistory")]
    [BasedOnRow(typeof(Entities.AuscultationHistoryRow), CheckNames = true)]
    public class AuscultationHistoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AuscultationHistoryId { get; set; }
        public Int32 AdmissionId { get; set; }
        public Int32 AuscultationId { get; set; }
    }
}