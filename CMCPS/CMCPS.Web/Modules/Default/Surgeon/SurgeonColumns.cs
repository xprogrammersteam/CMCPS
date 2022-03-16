
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Surgeon")]
    [BasedOnRow(typeof(Entities.SurgeonRow), CheckNames = true)]
    public class SurgeonColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SurgeonId { get; set; }
        [EditLink]
        public String SurgeonName { get; set; }
    }
}