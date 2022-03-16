
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Indication")]
    [BasedOnRow(typeof(Entities.IndicationRow), CheckNames = true)]
    public class IndicationForm
    {
        public String IndicationName { get; set; }
    }
}