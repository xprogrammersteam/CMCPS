
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.IllNess")]
    [BasedOnRow(typeof(Entities.IllNessRow), CheckNames = true)]
    public class IllNessForm
    {
        public String IllnessName { get; set; }
    }
}