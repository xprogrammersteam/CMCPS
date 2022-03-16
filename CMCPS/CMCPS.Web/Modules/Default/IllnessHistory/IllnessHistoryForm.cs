
namespace CMC.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.IllnessHistory")]
    [BasedOnRow(typeof(Entities.IllnessHistoryRow), CheckNames = true)]
    public class IllnessHistoryForm
    {
        public Int32 AdmissionId { get; set; }
        public Int32 IllnessId { get; set; }
    }
}