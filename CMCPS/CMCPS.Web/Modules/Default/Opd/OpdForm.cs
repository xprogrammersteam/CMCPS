
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

    [FormScript("Default.Opd")]
    [BasedOnRow(typeof(Entities.OpdRow)/*, CheckNames = true*/)]
    public class OpdForm
    {
        [Category("Patient Info"), NotMapped]
        [HalfWidth,Required]
        public String Name { get; set; }
        [HalfWidth, DefaultValue("now")]
        
        public DateTime Date { get; set; }
        [HalfWidth]
        public String Age { get; set; }
        [HalfWidth]
        public Int32 SexId { get; set; }
        [HalfWidth]
        public String BodyWt { get; set; }
        [HalfWidth]
        public String RegNo { get; set; }
        //[HalfWidth]
        //public String PinNo { get; set; }
        [HalfWidth]
        public int UnitId { get; set; }
        [HalfWidth]
        public Int32 PatientType { get; set; }
        
        [Category("Address")]
        [HalfWidth]
        public Int32 DistrictId { get; set; }
        [HalfWidth]
        public Int32 UpazilaId { get; set; }
        [HalfWidth]
        public String House { get; set; }
        [HalfWidth]
        public String PostOffice { get; set; }
        [HalfWidth]
        public String Mobile { get; set; }    
        
        [OpdWithDiagnosisDetailsEditor]
        public List<Entities.OpdWithDiagnosisDetailsRow> DiagnosisDetails { get; set; }
        
        [TextAreaEditor(Rows = 5)]
        public String History { get; set; }       
        
        [TextAreaEditor(Rows = 5)]
        public String Examination { get; set; }
        
        [TextAreaEditor(Rows = 5)]
        public String Investigation { get; set; }
        [TextAreaEditor(Rows = 5)]
        public String Advice { get; set; }
       
        [TextAreaEditor(Rows = 5)]
        public String Remarks { get; set; }
    }
}