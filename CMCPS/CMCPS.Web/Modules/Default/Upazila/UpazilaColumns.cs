
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Upazila")]
    [BasedOnRow(typeof(Entities.UpazilaRow), CheckNames = true)]
    public class UpazilaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UpazilaId { get; set; }
        public String DistrictName { get; set; }
        [EditLink]
        public String UpazilaName { get; set; }
    }
}