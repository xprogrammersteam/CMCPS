
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Diagram")]
    [BasedOnRow(typeof(Entities.DiagramRow), CheckNames = true)]
    public class DiagramForm
    {
        public String DiagramName { get; set; }
    }
}