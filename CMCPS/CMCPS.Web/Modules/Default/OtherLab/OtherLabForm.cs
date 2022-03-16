
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.OtherLab")]
    [BasedOnRow(typeof(Entities.OtherLabRow), CheckNames = true)]
    public class OtherLabForm
    {
        public String Name { get; set; }
    }
}