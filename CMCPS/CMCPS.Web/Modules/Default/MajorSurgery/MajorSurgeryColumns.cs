
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.MajorSurgery")]
    [BasedOnRow(typeof(Entities.MajorSurgeryRow), CheckNames = true)]
    public class MajorSurgeryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MajorSurgeryId { get; set; }
        [EditLink]
        public String MajorSurgeryName { get; set; }
    }
}