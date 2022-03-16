
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.VocalResonance")]
    [BasedOnRow(typeof(Entities.VocalResonanceRow), CheckNames = true)]
    public class VocalResonanceForm
    {
        public String VocalResonanceName { get; set; }
    }
}