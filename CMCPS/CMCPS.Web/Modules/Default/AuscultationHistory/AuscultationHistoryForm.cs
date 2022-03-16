
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.AuscultationHistory")]
    [BasedOnRow(typeof(Entities.AuscultationHistoryRow), CheckNames = true)]
    public class AuscultationHistoryForm
    {
        public Int32 AdmissionId { get; set; }
        public Int32 AuscultationId { get; set; }
    }
}