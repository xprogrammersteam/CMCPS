
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Ward")]
    [BasedOnRow(typeof(Entities.WardRow), CheckNames = true)]
    public class WardForm
    {
        public String WardNo { get; set; }
    }
}