
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Designation")]
    [BasedOnRow(typeof(Entities.DesignationRow), CheckNames = true)]
    public class DesignationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DesignationId { get; set; }
        [EditLink]
        public String DesignationName { get; set; }
    }
}