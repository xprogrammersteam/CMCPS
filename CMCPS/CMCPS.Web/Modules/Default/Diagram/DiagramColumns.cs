
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Diagram")]
    [BasedOnRow(typeof(Entities.DiagramRow), CheckNames = true)]
    public class DiagramColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DiagramId { get; set; }
        [EditLink]
        public String DiagramName { get; set; }
    }
}