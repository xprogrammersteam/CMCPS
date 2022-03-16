
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.RegularMedication")]
    [BasedOnRow(typeof(Entities.RegularMedicationRow), CheckNames = true)]
    public class RegularMedicationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RegularMedicationId { get; set; }
        [EditLink]
        public String RegularMedicationName { get; set; }
    }
}