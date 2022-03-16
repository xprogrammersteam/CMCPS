
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Antenatal")]
    [BasedOnRow(typeof(Entities.AntenatalRow), CheckNames = true)]
    public class AntenatalForm
    {
        public String AntenatalName { get; set; }
    }
}