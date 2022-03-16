
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.FamilyHistory")]
    [BasedOnRow(typeof(Entities.FamilyHistoryRow), CheckNames = true)]
    public class FamilyHistoryForm
    {
        public String FamilyHistory { get; set; }
        public String Note { get; set; }
    }
}