
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Duration")]
    [BasedOnRow(typeof(Entities.DurationRow), CheckNames = true)]
    public class DurationForm
    {
        public String DurationName { get; set; }
    }
}