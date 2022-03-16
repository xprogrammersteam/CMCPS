
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Anesthesia")]
    [BasedOnRow(typeof(Entities.AnesthesiaRow), CheckNames = true)]
    public class AnesthesiaForm
    {
        public String AnesthesiaName { get; set; }
    }
}