
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Histopathology")]
    [BasedOnRow(typeof(Entities.HistopathologyRow), CheckNames = true)]
    public class HistopathologyForm
    {
        public String HistopathologyName { get; set; }
    }
}