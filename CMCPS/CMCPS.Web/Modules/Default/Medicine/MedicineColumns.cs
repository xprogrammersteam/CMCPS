
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Medicine")]
    [BasedOnRow(typeof(Entities.MedicineRow), CheckNames = true)]
    public class MedicineColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MedicineId { get; set; }
        [EditLink]
        public String MedicineName { get; set; }
    }
}