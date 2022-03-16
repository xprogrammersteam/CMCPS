
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.PostNatal")]
    [BasedOnRow(typeof(Entities.PostNatalRow), CheckNames = true)]
    public class PostNatalColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PostNatalId { get; set; }
        [EditLink]
        public String PostNatalName { get; set; }
    }
}