
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Histopathology")]
    [BasedOnRow(typeof(Entities.HistopathologyRow), CheckNames = true)]
    public class HistopathologyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 HistopathologyId { get; set; }
        [EditLink]
        public String HistopathologyName { get; set; }
    }
}