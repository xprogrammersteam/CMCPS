
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.VocalResonance")]
    [BasedOnRow(typeof(Entities.VocalResonanceRow), CheckNames = true)]
    public class VocalResonanceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 VocalResonanceId { get; set; }
        [EditLink]
        public String VocalResonanceName { get; set; }
    }
}