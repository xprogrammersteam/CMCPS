
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.SpecialNote")]
    [BasedOnRow(typeof(Entities.SpecialNoteRow), CheckNames = true)]
    public class SpecialNoteColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SpecialNoteId { get; set; }
        [EditLink]
        public String SpecialNoteName { get; set; }
    }
}