
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Auscultation")]
    [BasedOnRow(typeof(Entities.AuscultationRow), CheckNames = true)]
    public class AuscultationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AuscultationId { get; set; }
        [EditLink]
        public String AuscultationName { get; set; }
    }
}