
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Instructions")]
    [BasedOnRow(typeof(Entities.InstructionsRow), CheckNames = true)]
    public class InstructionsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 InstructionsId { get; set; }
        [EditLink]
        public String InstructionsName { get; set; }
    }
}