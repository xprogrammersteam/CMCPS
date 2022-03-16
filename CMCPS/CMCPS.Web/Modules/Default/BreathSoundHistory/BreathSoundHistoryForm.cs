
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.BreathSoundHistory")]
    [BasedOnRow(typeof(Entities.BreathSoundHistoryRow), CheckNames = true)]
    public class BreathSoundHistoryForm
    {
        public Int32 AdmissionId { get; set; }
        public Int32 BreathSoundId { get; set; }
    }
}