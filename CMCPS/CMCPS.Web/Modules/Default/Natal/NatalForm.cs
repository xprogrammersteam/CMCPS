
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Natal")]
    [BasedOnRow(typeof(Entities.NatalRow), CheckNames = true)]
    public class NatalForm
    {
        public String NatalName { get; set; }
    }
}