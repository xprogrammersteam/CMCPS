
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Position")]
    [BasedOnRow(typeof(Entities.PositionRow), CheckNames = true)]
    public class PositionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PositionId { get; set; }
        [EditLink]
        public String PositionName { get; set; }
    }
}