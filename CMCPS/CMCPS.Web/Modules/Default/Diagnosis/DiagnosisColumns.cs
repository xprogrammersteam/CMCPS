
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Diagnosis")]
    [BasedOnRow(typeof(Entities.DiagnosisRow), CheckNames = true)]
    public class DiagnosisColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DiagnosisId { get; set; }
        [EditLink]
        public String DiagnosisName { get; set; }
        public String Note { get; set; }
    }
}