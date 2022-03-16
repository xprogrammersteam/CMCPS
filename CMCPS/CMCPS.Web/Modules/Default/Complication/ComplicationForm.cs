
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Complication")]
    [BasedOnRow(typeof(Entities.ComplicationRow)/*, CheckNames = true*/)]
    public class ComplicationForm
    {
        [Category("Patient Info")]
        [OneThirdWidth]
        public Int32 AdmissionId { get; set; }

        [OneThirdWidth, DefaultValue("now"), DisplayFormat("dd-MM-yyyy")]
        public DateTime EntryDate { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Age { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Sex { get; set; }
        [OneThirdWidth, ReadOnly(true), DateFormatter(DisplayFormat = "dd-MM-yyyy")]
        public DateTime AdmissionDate { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Weight { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String BloodGroup { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String PinNumber { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String UnitNumber { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String UnitRegNo { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String BedNumber { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String HospitalRegNo { get; set; }
        [Category("Final Diagnosis")]
        [TextAreaEditor(Rows = 3), ReadOnly(true)]
        public String FinalDiagnosis { get; set; }
        [Category("Complication")]        
        [CssClass("col-md-7")]
        public Int32 ComplicationNoteId { get; set; }
        [CssClass("col-md-1")]
        public string AddtoComplication { get; set; }
        [TwoThirdWidth]
        [TextAreaEditor(Rows = 5)]
        public String ComplicationName { get; set; }

    }
}