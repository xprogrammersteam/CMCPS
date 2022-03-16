
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Instructions")]
    [BasedOnRow(typeof(Entities.InstructionsRow), CheckNames = true)]
    public class InstructionsForm
    {
        public String InstructionsName { get; set; }
    }
}