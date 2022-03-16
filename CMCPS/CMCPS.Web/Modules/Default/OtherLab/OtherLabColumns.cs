
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.OtherLab")]
    [BasedOnRow(typeof(Entities.OtherLabRow), CheckNames = true)]
    public class OtherLabColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 LabId { get; set; }
        [EditLink]
        public String Name { get; set; }
    }
}