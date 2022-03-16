
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Anesthetist")]
    [BasedOnRow(typeof(Entities.AnesthetistRow), CheckNames = true)]
    public class AnesthetistForm
    {
        public String AnesthetistName { get; set; }
    }
}