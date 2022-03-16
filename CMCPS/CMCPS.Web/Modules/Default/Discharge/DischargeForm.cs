
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using CMCPS.Modules.Default.Admission;

    [FormScript("Default.Discharge")]
    [BasedOnRow(typeof(Entities.DischargeRow)/*, CheckNames = true*/)]
    public class DischargeForm
    {
        [Category("Patient Info")]
        [OneThirdWidth]
        public Int32 AdmissionId { get; set; }

        [OneThirdWidth, DefaultValue("now"), DisplayFormat("dd-MM-yyyy")]
        public DateTime Date { get; set; }
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
        //[OneThirdWidth]
        //public Int32 OperationId { get; set; }
        [Category("Investigations")]
        [OneThirdWidth, ReadOnly(true)]
        public String Cbc { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Creatinine { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Urea { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Sugar { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Albumin { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Calcium { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public String BloodCulture { get; set; }
        [OneThirdWidth, ReadOnly(true)]

        public String Crp { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Bt { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Ct { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String ProthrombinTime { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Aptt { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String OptionToAddHematology { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public String Na { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String K { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Cl { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String HCO3 { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Cxr { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Axr { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String XrayKub { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Usg { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String BaEnema { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String BaMealFollowThrough { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Mcu { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Rgu { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Ivu { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String CtScan { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Mri { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String OptionToAddImaging { get; set; }
        [Category("Treatment Given")]
        [TwoThirdWidth, ReadOnly(true)]
        public Int32 OperationId { get; set; }
        //public String Operation { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public DateTime OperationDate { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 15), ReadOnly(true)]
        public String Findings { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 15), ReadOnly(true)]
        public String Procedures { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 3), ReadOnly(true)]
        public String Diagnosis { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 3), ReadOnly(true)]
        public String Indication { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 3), ReadOnly(true)]
        public String Anesthesia { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 3), ReadOnly(true)]
        public String Position { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 3), ReadOnly(true)]
        public String Incision { get; set; }
        //[HalfWidth, TextAreaEditor(Rows = 3), ReadOnly(true)]
        //public String Diagram { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 3), ReadOnly(true)]
        public String Histopathology { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 3), ReadOnly(true)]
        public String SpecialNote { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 3), ReadOnly(true)]
        public String Instructions { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 3), ReadOnly(true)]
        public String FurtherPlan { get; set; }
        [Category("Treatment Continue")]
        [TextAreaEditor(Rows = 6)]
        public String TreatmentContinues { get; set; }
        [CssClass("col-md-4")]
        public Int32 MedicineId { get; set; }
        [CssClass("col-md-3"), LabelWidth(40)]
        public Int32 DoaseId { get; set; }
        [CssClass("col-md-2"), LabelWidth(60)]
        public Int32 DurationId { get; set; }
        
        [CssClass("col-md-2")]
        public Int32 Meal { get; set; }
        
        [CssClass("col-md-1")]
        public String AddToArea { get; set; }
        [TextAreaEditor(Rows =15)]
        public String Advice { get; set; }
        //public String Department { get; set; }
    }
}