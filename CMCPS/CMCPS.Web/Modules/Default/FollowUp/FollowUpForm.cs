
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using System.ComponentModel.DataAnnotations.Schema;

    [FormScript("Default.FollowUp")]
    [BasedOnRow(typeof(Entities.FollowUpRow)/*, CheckNames = true*/)]
    public class FollowUpForm
    {
        [Category("Patient Info")]
        [OneThirdWidth]
        public Int32 AdmissionId { get; set; }
        [OneThirdWidth, DefaultValue("now"), DateTimeFormatter(DisplayFormat = "dd/MM/yyyy")]
        public DateTime Date { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Age { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public String Sex { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Weight { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String BloodGroup { get; set; }
        [OneThirdWidth, ReadOnly(true), DateFormatter(DisplayFormat = "dd/MM/yyyy")]
        public DateTime AdmissionDate { get; set; }
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
        [Category("Follow Up Note")]
        [CssClass("col-md-5")]
        public Int32 DiagnosisId { get; set; }
        [CssClass("col-md-1")]
        public string AddtoDiagnosis { get; set; }
        [CssClass("col-md-5")]
        public Int32 ChiefComplaintId { get; set; }
        [CssClass("col-md-1")]
        public string AddtoComplaint { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 6)]
        public String Diagnosis { get; set; }
       
        [HalfWidth, TextAreaEditor(Rows = 6)]
        public String ChiefComplaint { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 6)]
        public String Exam { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 6)]
        public String Advice { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 6)]
        public String Note { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 6)]
        public String Plan { get; set; }
        
    }
}