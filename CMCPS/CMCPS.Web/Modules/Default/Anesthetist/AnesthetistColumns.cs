
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Anesthetist")]
    [BasedOnRow(typeof(Entities.AnesthetistRow), CheckNames = true)]
    public class AnesthetistColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AnesthetistId { get; set; }
        [EditLink]
        public String AnesthetistName { get; set; }
    }
}