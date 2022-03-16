
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.PercussionHistory")]
    [BasedOnRow(typeof(Entities.PercussionHistoryRow), CheckNames = true)]
    public class PercussionHistoryForm
    {
        public Int32 AdmissionId { get; set; }
        public Int32 PercussionId { get; set; }
    }
}