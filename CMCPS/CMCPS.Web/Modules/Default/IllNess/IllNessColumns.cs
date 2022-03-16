
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.IllNess")]
    [BasedOnRow(typeof(Entities.IllNessRow), CheckNames = true)]
    public class IllNessColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IllnessId { get; set; }
        [EditLink]
        public String IllnessName { get; set; }
    }
}