
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Auscultation")]
    [BasedOnRow(typeof(Entities.AuscultationRow), CheckNames = true)]
    public class AuscultationForm
    {
        public String AuscultationName { get; set; }
    }
}