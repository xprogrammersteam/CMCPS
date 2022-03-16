
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Percussion")]
    [BasedOnRow(typeof(Entities.PercussionRow), CheckNames = true)]
    public class PercussionForm
    {
        public String PercussionName { get; set; }
    }
}