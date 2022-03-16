
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Meals")]
    [BasedOnRow(typeof(Entities.MealsRow), CheckNames = true)]
    public class MealsForm
    {
        public String MealName { get; set; }
    }
}