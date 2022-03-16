
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Operation")]
    [BasedOnRow(typeof(Entities.OperationRow), CheckNames = true)]
    public class OperationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OperationId { get; set; }
        [EditLink]
        public String OperationName { get; set; }
        public String Findings { get; set; }
        public String Procedures { get; set; }
    }
}