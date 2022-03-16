
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.FurtherPlan")]
    [BasedOnRow(typeof(Entities.FurtherPlanRow), CheckNames = true)]
    public class FurtherPlanForm
    {
        public String FurtherPlanName { get; set; }
    }
}