
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.OperationNote")]
    [BasedOnRow(typeof(Entities.OperationNoteRow)/*, CheckNames = true*/)]
    public class OperationNoteForm
    {
        [Category("Patient Info")]
        [OneThirdWidth]
        public Int32 AdmissionId { get; set; }
        [OneThirdWidth, DefaultValue("now"), DateTimeFormatter(DisplayFormat = "dd/MM/yyyy")]
        public DateTime Date { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Age { get; set; }

        [OneThirdWidth, ReadOnly(true), DateFormatter(DisplayFormat = "dd/MM/yyyy")]
        public DateTime AdmissionDate { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Sex { get; set; }

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
        [OneThirdWidth, ReadOnly(true)]
        public String Weight { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String BloodGroup { get; set; }
        [OneThirdWidth]
        public Int32 Type { get; set; }
        [OneThirdWidth, EditTimeEditor(ShowSeconds = true), DefaultValue("now")]
        public TimeSpan StartTime { get; set; }
        [OneThirdWidth, EditTimeEditor(ShowSeconds = true), DefaultValue("now")]
        public TimeSpan EndTime { get; set; }
        [OneThirdWidth]
        public Boolean? IsView { get; set; }
        [Category("Operation Note")]
        [CssClass("col-md-5")]
        public Int32 DiagnosisId { get; set; }
        [CssClass("col-md-1")]

        public string AddtoDiagnosis { get; set; }
        [CssClass("col-md-5")]
        public Int32 IndicationId { get; set; }
        [CssClass("col-md-1")]
        public string AddtoIndication { get; set; }
        [HalfWidth,TextAreaEditor(Rows =4)]
        public String Diagnosis { get; set; }
       
        [HalfWidth, TextAreaEditor(Rows = 4)]
        public String Indication { get; set; }
        [CssClass("col-md-5")]
        public Int32 AnesthesiaId { get; set; }
        [CssClass("col-md-1")]

        public string AddtoAnesthesia { get; set; }
        [CssClass("col-md-5")]
        public Int32 PositionId { get; set; }
        [CssClass("col-md-1")]
        public string AddtoPosition { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 4)]
        public String Anesthesia { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 4)]
        public String Position { get; set; }
        [CssClass("col-md-6")]
        public Int32 IncisionId { get; set; }
        [CssClass("col-md-1")]

        public string AddtoIncision { get; set; }
        //[CssClass("col-md-5")]
        //public Int32 DiagramId { get; set; }
        //[CssClass("col-md-1")]
        //public string AddtoDiagram { get; set; }
       
       
        [CssClass("col-md-7"), TextAreaEditor(Rows = 4)]
        public String Incision { get; set; }
        [FullWidth]
        public String Diagram { get; set; }
       
        public Int32 OperationId { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 15)]
        public String Findings { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 15)]
        public String Procedures { get; set; }
        [CssClass("col-md-5")]
        public Int32 HistopathologyId { get; set; }
        [CssClass("col-md-1")]

        public string AddtoHistopathology { get; set; }
        [CssClass("col-md-5")]
        public Int32 SpecialNoteId { get; set; }
        [CssClass("col-md-1")]
        public string AddtoSpecialNote { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 4)]
        public String Histopathology { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 4)]
        public String SpecialNote { get; set; }
        [CssClass("col-md-5")]
        public Int32 InstructionsId { get; set; }
        [CssClass("col-md-1")]

        public string AddtoInstructions { get; set; }
        [CssClass("col-md-5")]
        public Int32 FurtherPlanId { get; set; }
        [CssClass("col-md-1")]
        public string AddtoFurtherPlan { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 4)]
        public String Instructions { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 4)]
        public String FurtherPlan { get; set; }
        [HalfWidth]
        public String PhotoUrl { get; set; }
        [Category("Surgeon Information")]
        [CssClass("col-md-5")]
        public Int32 SurgeonId { get; set; }
        [CssClass("col-md-1")]

        public string AddtoSurgeon { get; set; }
        [CssClass("col-md-5")]
        public Int32 AssistantSurgeonId { get; set; }
        [CssClass("col-md-1")]
        public string AddtoAssistantSurgeon { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 4)]
        public String Surgeon { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 4)]
        public String AssistantSurgeon { get; set; }
        [CssClass("col-md-5")]
        public Int32 AnesthetistId { get; set; }
        [CssClass("col-md-1")]

        public string AddtoAnesthetist { get; set; }
        [CssClass("col-md-5")]
        public Int32 OtSisterId { get; set; }
        [CssClass("col-md-1")]
        public string AddtoOtSister { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 4)]
        public String Anesthetist { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 4)]
        public String OtSister { get; set; }
        [CssClass("col-md-5")]
        public Int32 OtAttendantId { get; set; }
        [CssClass("col-md-2")]
        public string AddtoOtAttendant { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 4)]
        public String OtAttendant { get; set; }
       
    }
}