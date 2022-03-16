
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.ImmunizationHistory")]
    [BasedOnRow(typeof(Entities.ImmunizationHistoryRow), CheckNames = true)]
    public class ImmunizationHistoryForm
    {
        public Int32 AdmissionId { get; set; }
        public Int32 ImmunizationId { get; set; }
    }
}