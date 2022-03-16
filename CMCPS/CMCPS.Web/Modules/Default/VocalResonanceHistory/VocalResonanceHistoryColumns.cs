
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.VocalResonanceHistory")]
    [BasedOnRow(typeof(Entities.VocalResonanceHistoryRow), CheckNames = true)]
    public class VocalResonanceHistoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 VocalResonanceHistoryId { get; set; }
        public Int32 AdmissionId { get; set; }
        public Int32 VocalResonanceId { get; set; }
    }
}