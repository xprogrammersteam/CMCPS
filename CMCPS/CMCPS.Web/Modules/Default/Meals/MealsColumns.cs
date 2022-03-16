
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Meals")]
    [BasedOnRow(typeof(Entities.MealsRow), CheckNames = true)]
    public class MealsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MealId { get; set; }
        [EditLink]
        public String MealName { get; set; }
    }
}