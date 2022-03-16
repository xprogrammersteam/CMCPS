
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Anesthesia")]
    [BasedOnRow(typeof(Entities.AnesthesiaRow), CheckNames = true)]
    public class AnesthesiaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AnesthesiaId { get; set; }
        [EditLink]
        public String AnesthesiaName { get; set; }
    }
}