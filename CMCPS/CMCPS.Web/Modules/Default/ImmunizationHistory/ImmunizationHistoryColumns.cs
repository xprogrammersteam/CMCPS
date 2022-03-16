
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.ImmunizationHistory")]
    [BasedOnRow(typeof(Entities.ImmunizationHistoryRow), CheckNames = true)]
    public class ImmunizationHistoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ImmunizationHistoryId { get; set; }
        public Int32 AdmissionId { get; set; }
        public Int32 ImmunizationId { get; set; }
    }
}