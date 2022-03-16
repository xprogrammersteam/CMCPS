
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Doase")]
    [BasedOnRow(typeof(Entities.DoaseRow), CheckNames = true)]
    public class DoaseForm
    {
        public String DoaseName { get; set; }
    }
}