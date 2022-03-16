
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Natal")]
    [BasedOnRow(typeof(Entities.NatalRow), CheckNames = true)]
    public class NatalColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 NatalId { get; set; }
        [EditLink]
        public String NatalName { get; set; }
    }
}