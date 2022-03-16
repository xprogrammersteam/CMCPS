
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Pathology")]
    [BasedOnRow(typeof(Entities.PathologyRow), CheckNames = true)]
    public class PathologyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PathologyId { get; set; }
        [EditLink]
        public String PathologyName { get; set; }
    }
}