
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.BreathSoundHistory")]
    [BasedOnRow(typeof(Entities.BreathSoundHistoryRow), CheckNames = true)]
    public class BreathSoundHistoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BreathSoundHistoryId { get; set; }
        public Int32 AdmissionId { get; set; }
        public Int32 BreathSoundId { get; set; }
    }
}