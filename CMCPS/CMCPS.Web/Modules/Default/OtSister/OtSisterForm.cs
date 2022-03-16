
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.OtSister")]
    [BasedOnRow(typeof(Entities.OtSisterRow), CheckNames = true)]
    public class OtSisterForm
    {
        public String OtSisterName { get; set; }
    }
}