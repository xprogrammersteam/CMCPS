
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.ComplicationNote")]
    [BasedOnRow(typeof(Entities.ComplicationNoteRow), CheckNames = true)]
    public class ComplicationNoteColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ComplicationNoteId { get; set; }
        [EditLink]
        public String ComplicationNote { get; set; }
    }
}