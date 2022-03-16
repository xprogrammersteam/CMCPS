
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Immunization")]
    [BasedOnRow(typeof(Entities.ImmunizationRow), CheckNames = true)]
    public class ImmunizationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ImmunizationId { get; set; }
        [EditLink]
        public String ImmunizationName { get; set; }
    }
}