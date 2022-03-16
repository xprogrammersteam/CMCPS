
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Incision")]
    [BasedOnRow(typeof(Entities.IncisionRow), CheckNames = true)]
    public class IncisionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IncisionId { get; set; }
        [EditLink]
        public String IncisionName { get; set; }
    }
}