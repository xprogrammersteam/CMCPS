
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.OtSister")]
    [BasedOnRow(typeof(Entities.OtSisterRow), CheckNames = true)]
    public class OtSisterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OtSisterId { get; set; }
        [EditLink]
        public String OtSisterName { get; set; }
    }
}