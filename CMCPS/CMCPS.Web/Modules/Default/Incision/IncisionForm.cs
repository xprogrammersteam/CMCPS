
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Incision")]
    [BasedOnRow(typeof(Entities.IncisionRow), CheckNames = true)]
    public class IncisionForm
    {
        public String IncisionName { get; set; }
    }
}