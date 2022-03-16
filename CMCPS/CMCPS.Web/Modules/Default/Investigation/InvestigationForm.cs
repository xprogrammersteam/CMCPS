
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

    [FormScript("Default.Investigation")]
    [BasedOnRow(typeof(Entities.InvestigationRow), CheckNames = true)]
    public class InvestigationForm
    {
        [Category("Patient Info")]
        [OneThirdWidth]
        public Int32 AdmissionId { get; set; }
        
        [OneThirdWidth, DefaultValue("now"),DisplayFormat("dd-MM-yyyy")]
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
        [Category("Hematology")]
        [HalfWidth]
        public String Cbc { get; set; }
        [HalfWidth]
        public String Creatinine { get; set; }
        [HalfWidth]
        public String Urea { get; set; }
        [HalfWidth]
        public String Sugar { get; set; }
        [HalfWidth]
        public String Albumin { get; set; }
        [HalfWidth]
        public String Calcium { get; set; }
      
        [HalfWidth]
        public String BloodCulture { get; set; }
        [HalfWidth]
        
        public String Crp { get; set; }
        [HalfWidth]
        public String Bt { get; set; }
        [HalfWidth]
        public String Ct { get; set; }
        [HalfWidth]
        public String ProthrombinTime { get; set; }
        [HalfWidth]
        public String Aptt { get; set; }
        [HalfWidth]
        public String OptionToAddHematology { get; set; }
        [Category("Electrolytes")]
        [HalfWidth]
        public String Na { get; set; }
        [HalfWidth]
        public String K { get; set; }
        [HalfWidth]
        public String Cl { get; set; }
        [HalfWidth]
        public String HCO3 { get; set; }
        [Category("Other Lab"), NotMapped]
        [OtherLabWithInvestigationEditor]
        public List<Entities.OtherLabWithInvestigationRow> OtherLab { get; set; }
        [Category("Imaging")]
        [HalfWidth]
        public String Cxr { get; set; }
        [HalfWidth]
        public String Axr { get; set; }
        [HalfWidth]
        public String XrayKub { get; set; }
        [HalfWidth]
        public String Usg { get; set; }
        [HalfWidth]
        public String BaEnema { get; set; }
        [HalfWidth]
        public String BaMealFollowThrough { get; set; }
        [HalfWidth]
        public String Mcu { get; set; }
        [HalfWidth]
        public String Rgu { get; set; }
        [HalfWidth]
        public String Ivu { get; set; }
        [HalfWidth]
        public String CtScan { get; set; }
        [HalfWidth]
        public String Mri { get; set; }
        [HalfWidth]
        public String OptionToAddImaging { get; set; }
        [Category("Pathology"), NotMapped]
        [PathologyAndInvestigationDetailsEditor]
        public List<Entities.PathologyAndInvestigationDetailsRow> Pathology { get; set; }
    }
}