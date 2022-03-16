
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Indication")]
    [BasedOnRow(typeof(Entities.IndicationRow), CheckNames = true)]
    public class IndicationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IndicationId { get; set; }
        [EditLink]
        public String IndicationName { get; set; }
    }
}