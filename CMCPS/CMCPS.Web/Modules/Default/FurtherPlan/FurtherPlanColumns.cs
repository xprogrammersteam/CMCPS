
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.FurtherPlan")]
    [BasedOnRow(typeof(Entities.FurtherPlanRow), CheckNames = true)]
    public class FurtherPlanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 FurtherPlanId { get; set; }
        [EditLink]
        public String FurtherPlanName { get; set; }
    }
}