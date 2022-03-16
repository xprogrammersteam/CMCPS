
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Surgeon")]
    [BasedOnRow(typeof(Entities.SurgeonRow), CheckNames = true)]
    public class SurgeonForm
    {
        public String SurgeonName { get; set; }
    }
}