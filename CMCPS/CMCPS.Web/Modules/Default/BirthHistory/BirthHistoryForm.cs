
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.BirthHistory")]
    [BasedOnRow(typeof(Entities.BirthHistoryRow), CheckNames = true)]
    public class BirthHistoryForm
    {
        public String BirthHistory { get; set; }
        public String Note { get; set; }
    }
}