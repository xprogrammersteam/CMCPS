
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.VocalResonanceHistory")]
    [BasedOnRow(typeof(Entities.VocalResonanceHistoryRow), CheckNames = true)]
    public class VocalResonanceHistoryForm
    {
        public Int32 AdmissionId { get; set; }
        public Int32 VocalResonanceId { get; set; }
    }
}