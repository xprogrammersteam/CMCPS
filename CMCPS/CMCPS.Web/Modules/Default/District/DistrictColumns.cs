
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.District")]
    [BasedOnRow(typeof(Entities.DistrictRow), CheckNames = true)]
    public class DistrictColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DistrictId { get; set; }
        [EditLink]
        public String DistrictName { get; set; }
    }
}