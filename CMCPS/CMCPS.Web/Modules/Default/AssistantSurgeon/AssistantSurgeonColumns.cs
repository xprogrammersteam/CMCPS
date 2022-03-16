
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.AssistantSurgeon")]
    [BasedOnRow(typeof(Entities.AssistantSurgeonRow), CheckNames = true)]
    public class AssistantSurgeonColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AssistantSurgeonId { get; set; }
        [EditLink]
        public String AssistantSurgeonName { get; set; }
    }
}