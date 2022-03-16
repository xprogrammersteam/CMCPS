
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.OutcomeNote")]
    [BasedOnRow(typeof(Entities.OutcomeNoteRow), CheckNames = true)]
    public class OutcomeNoteColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OutcomeNoteId { get; set; }
        [EditLink]
        public String Outcome { get; set; }
    }
}