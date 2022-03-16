
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Sex")]
    [BasedOnRow(typeof(Entities.SexRow)/*, CheckNames = true*/)]
    public class SexColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SexId { get; set; }
        [EditLink]
        public String Sex { get; set; }
        public String Note { get; set; }
    }
}