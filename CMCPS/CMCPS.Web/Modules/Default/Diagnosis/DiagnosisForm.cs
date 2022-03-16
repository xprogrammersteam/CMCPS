
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Diagnosis")]
    [BasedOnRow(typeof(Entities.DiagnosisRow), CheckNames = true)]
    public class DiagnosisForm
    {
        public String DiagnosisName { get; set; }
        public String Note { get; set; }
    }
}