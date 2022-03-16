
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Pathology")]
    [BasedOnRow(typeof(Entities.PathologyRow), CheckNames = true)]
    public class PathologyForm
    {
        public String PathologyName { get; set; }
    }
}