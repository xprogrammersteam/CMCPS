
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Antenatal")]
    [BasedOnRow(typeof(Entities.AntenatalRow), CheckNames = true)]
    public class AntenatalColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AntenatalId { get; set; }
        [EditLink]
        public String AntenatalName { get; set; }
    }
}