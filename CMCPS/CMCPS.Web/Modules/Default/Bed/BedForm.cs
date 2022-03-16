
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Bed")]
    [BasedOnRow(typeof(Entities.BedRow), CheckNames = true)]
    public class BedForm
    {
        public String BedNumber { get; set; }
        public String Note { get; set; }
    }
}