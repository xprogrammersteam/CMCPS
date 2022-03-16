
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.AdmissionPpDetails")]
    [BasedOnRow(typeof(Entities.AdmissionPpDetailsRow), CheckNames = true)]
    public class AdmissionPpDetailsForm
    {
        public Int32 ActivityId { get; set; }
        public Int32 SmokingId { get; set; }
        public Int32 AlcoholismId { get; set; }
        public Int32 DrugAddictionId { get; set; }
        public Int32 ExposureHistoryId { get; set; }
    }
}