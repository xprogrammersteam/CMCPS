
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serenity.Data.Mapping;
    using CMCPS.Modules.Default.Admission;

    [FormScript("Default.Admission")]
    [BasedOnRow(typeof(Entities.AdmissionRow), CheckNames = true)]
    public class AdmissionForm
    {
        [Category("Admission")]
        [OneThirdWidth]
        public String Name { get; set; }        
        
        [OneThirdWidth, DefaultValue("now")]
        public DateTime Date { get; set; }
        [OneThirdWidth, EditTimeEditor(ShowSeconds = true), DefaultValue("now")]
        public TimeSpan Time { get; set; }
        [OneThirdWidth]
        public String Age { get; set; }
        [OneThirdWidth, DefaultValue("now")]
        public DateTime? DateOfBirth { get; set; }
        [OneThirdWidth]
        public Int32 SexId { get; set; }
        [OneThirdWidth]
        public Int32 Religion { get; set; }
        [OneThirdWidth]
        public Int32 MaritalStatus { get; set; }

        [OneThirdWidth]
        public Int32 WardId { get; set; }
        [OneThirdWidth]
        public Int32 BedId { get; set; }
        //[OneThirdWidth]
        //public Int32 UnitId { get; set; }
        //[OneThirdWidth]
        //public String UnitRegNumber { get; set; }
        //[OneThirdWidth]
        //public String HospitalRegNumber { get; set; }
        [OneThirdWidth]
        public String BloodGroupId { get; set; }
        [OneThirdWidth]
        public String FatherName { get; set; }
        [OneThirdWidth]
        public String FatherNID { get; set; }
        [OneThirdWidth]
        public String MotherName { get; set; }
        [OneThirdWidth]
        public String MotherNID { get; set; }

        //[OneThirdWidth]
        //public Int32 Result { get; set; }
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
        [Category("Emergency Address")]
        [OneThirdWidth]
        public String EmergencyPerson { get; set; }
        [OneThirdWidth]
        public Int32 EmergencyRelation { get; set; }
        [OneThirdWidth]
        public String EmergencyPerMobile { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String EmergencyPerAddress { get; set; }
        //[HalfWidth]
        [Category("Presenting Complaints"),NotMapped]
        [AdmissionCcDetailEditor]
        public List<Entities.AdmissionCcDetailsRow> DetailList { get; set; }
      
        [TextAreaEditor(Rows = 6)]
        public String HistoryOfPresentIllness { get; set; }
      
        [Category("History of past Illness")]
        public List<Int32> IllnessList { get; set; }
        [CssClass("col-md-5")]
        public Int32 MajorSurgeryId { get; set; }
        [CssClass("col-md-1")]
        public string AddtoMajorSurgery { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 4)]
        public String MajorSurgery { get; set; }
        [Category("Treatment History")]
        [OneThirdWidth]
        public String RegularMedicationId { get; set; }
        [OneThirdWidth]
        public Int32 BloodTransfusion { get; set; }
        [OneThirdWidth]
        public List<Int32> ImmunizationList { get; set; }
        [Category("Family History")]
        public Int32 FamilyHistoryDiseaseId { get; set; }
        [Category("Menstrual History")]
        [OneThirdWidth]
        public String AgeAtMenarche { get; set; }
        [CssClass("col-md-1")]
        public String AgeAtMenarcheLabel { get; set; }
       
        [OneThirdWidth]
        public Int32Field MenarcheCycle { get; set; }
        
        [OneThirdWidth]
        public String AgeOfMenopause { get; set; }
        [CssClass("col-md-1")]
        public String AgeAtMenarcheLabel1 { get; set; }
        [OneThirdWidth]
        public String AgeOfLastChild { get; set; }
        [CssClass("col-md-1")]
        public String AgeAtMenarcheLabel2 { get; set; }
        [HalfWidth]
        public DateTime? LMP { get; set; }

        [Category("Personal History")]

        [AdmissionPpDetailEditor]
        public List<Entities.AdmissionPpDetailsRow> PPDetailList { get; set; }

        [Category("Socioeconomic History")]
        [TextAreaEditor(Rows =4)]
        public String Socioeconomichistory { get; set; }
        [Category("Travel History")]
        [TextAreaEditor(Rows = 2)]
        public String Travelhistory { get; set; }
        [Category("Birth History")]
        public List<Int32> AntenatalList { get; set; }
        public List<Int32> NatalList { get; set; }
        public List<Int32> PostNatalList { get; set; }
        [Category("Past Medical History")]
        [HalfWidth, TextAreaEditor(Rows = 2)]
       
        public String Milestone { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 2)]
        public String HoPastIllness { get; set; }
        [HalfWidth]
        public Int32 Immunization { get; set; }
        [HalfWidth]
        public Int32 Feedinghistory { get; set; }
        

        [HalfWidth, TextAreaEditor(Rows = 2)]
        public String DrugHistory { get; set; }
        [HalfWidth]
        public Int32 FamilyHistoryId { get; set; }
        [HalfWidth]
        public int ConsanguinityId { get; set; }
       
        [HalfWidth, TextAreaEditor(Rows = 2)]
        public String AllergicHistory { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 2)]
        public String SocialPersonalHistory{ get; set; }
        [HalfWidth, TextAreaEditor(Rows = 2)]
        public String Conditions { get; set; }
        
       
        //public String Familyhistory{ get; set; }

        
        [Category("General Examination")]
        [OneThirdWidth]
        public String Appearance { get; set; }
        [OneThirdWidth]
        public String Decubitus { get; set; }
        [OneThirdWidth]
        public String Behaviour { get; set; }
        [OneThirdWidth]
        public String BodyBuild { get; set; }
        [OneThirdWidth]
        public String BMI { get; set; }
        [OneThirdWidth]
        public int AnemiaId { get; set; }
        [OneThirdWidth]
        public int JaundiceId { get; set; }
        [OneThirdWidth]
        public int Cyanosis { get; set; }
        [OneThirdWidth]
        public int DehydrationId { get; set; }
        //[OneThirdWidth]
        //public int? Weight { get; set; }
        //[OneThirdWidth]
        //public string Height { get; set; }
        [OneThirdWidth]
        public int OedemaId { get; set; }
        [OneThirdWidth]
        public int Clubbing { get; set; }
        [OneThirdWidth]
        public int Koilonychia { get; set; }
        [OneThirdWidth]
        public int Leukonychia { get; set; }
        [OneThirdWidth]
        public int Edema { get; set; }
        [OneThirdWidth]
        public int NeckVeins { get; set; }
        [OneThirdWidth]
        public int JVP { get; set; }
        [OneThirdWidth]
        public int BonyTenderness { get; set; }
        [OneThirdWidth]
        public int LymphNode { get; set; }
        [OneThirdWidth]
        public int Site { get; set; }
        [OneThirdWidth]
        public String Size { get; set; }
        [OneThirdWidth]
        public int Tenderness { get; set; }
        [OneThirdWidth]
        public int Consistency { get; set; }
        [OneThirdWidth]
        public int Fixation { get; set; }
        [OneThirdWidth]
        public int LocalTemperature { get; set; }
        [OneThirdWidth]
        public int DischargingSinus { get; set; }
        [OneThirdWidth]
        public int ThyroidGland { get; set; }        
        [OneThirdWidth]
        public String Pulse { get; set; }
        [OneThirdWidth]
        public String RespRate { get; set; }
        [OneThirdWidth]
        public String BP { get; set; }
        [OneThirdWidth]
        public String Temperature { get; set; }
        [FullWidth]
        public String GEOther { get; set; }
        //[OneThirdWidth]
        //public String CoOperation { get; set; }
        //[OneThirdWidth]
        //public String Circumference { get; set; }
        
        //[OneThirdWidth]
        //public Int32 SignMeningeal { get; set; }
        //[OneThirdWidth]
        //public String Nutrition { get; set; }
        //[OneThirdWidth]
        //public Int32 Site { get; set; }
        

        [Category("Local Examination")]
        [FullWidth]
        public Int32 ExaminationRegion { get; set; }
        [HalfWidth]
        [TextAreaEditor(Rows = 3)]
        public String Inspection { get; set; }
        [HalfWidth]
        [TextAreaEditor(Rows = 3)]
        public String Palpation { get; set; }
        [HalfWidth]
        [TextAreaEditor(Rows = 3)]
        public String Percussion { get; set; }
        [HalfWidth]
        [TextAreaEditor(Rows = 3)]
        public String Auscultation { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Other { get; set; }

        [Category("Systemic Examination")]
        public Boolean? IsNAD { get; set; }
        [OneThirdWidth]
        public Int32 RR { get; set; }
        [OneThirdWidth]
        public Int32 Muscles { get; set; }
        [OneThirdWidth]
        public Int32 Stridor { get; set; }
        [OneThirdWidth]
        public Int32 CyanosisReSelect { get; set; }
        [OneThirdWidth]
        public Int32 ClubbingReSelect { get; set; }
        [OneThirdWidth]
        public Int32 NicotineStain { get; set; }
        [OneThirdWidth]
        public Int32 Asterixis { get; set; }
        [OneThirdWidth]
        public Int32 JVPReSelect { get; set; }
        [OneThirdWidth]
        public Int32 LymphReSelect { get; set; }
        [OneThirdWidth]
        public Int32 ScarMark { get; set; }
        [OneThirdWidth]
        public Int32 Swelling { get; set; }
        [OneThirdWidth]
        public Int32 ShapeChest { get; set; }
        [OneThirdWidth]
        public Int32 VisibleVein { get; set; }
        [OneThirdWidth]
        public Int32 ApexBeat { get; set; }
        [OneThirdWidth]
        public Int32 SupraclavicularIndrawing { get; set; }
        [OneThirdWidth]
        public Int32 TrachealTag { get; set; }
        [OneThirdWidth]
        public Int32 ICTSitu { get; set; }
        [OneThirdWidth]
        public Int32 RadiationMark { get; set; }

        [OneThirdWidth]
        public Int32 PositionTrachea { get; set; }
        [OneThirdWidth]
        public Int32 PositionApexBeat { get; set; }
        [OneThirdWidth]
        public Int32 VocalFremitus { get; set; }
        [OneThirdWidth]
        public Int32 ChestExpansibility { get; set; }

        [OneThirdWidth]
        public List<Int32> PercussionList { get; set; }
        [OneThirdWidth]
        public List<Int32> AuscultationList { get; set; }
        [OneThirdWidth]
        public List<Int32> BreathSoundList { get; set; }
        [OneThirdWidth]
        public List<Int32> VocalResonanceList { get; set; }
        [OneThirdWidth]
        public Int32 AddedSound { get; set; }
        [OneThirdWidth]
        public Int32 Rhonchi { get; set; }
        [OneThirdWidth]
        public Int32 Crepitation { get; set; }
        [OneThirdWidth]
        public Int32 Rub { get; set; }

        [Category("Cardiovascular system")]
        [OneThirdWidth]
        public Int32 Skin { get; set; }
        [OneThirdWidth]
        public String SkinText { get; set; }
        [OneThirdWidth]
        public Int32 PulseRate { get; set; }
        [OneThirdWidth]
        public Int32 Rhythm { get; set; }
        [OneThirdWidth]
        public Int32 Volume { get; set; }
        [OneThirdWidth]
        public Int32 Character { get; set; }
        [OneThirdWidth]
        public Int32 RedioFemoralDelay { get; set; }
        [OneThirdWidth]
        public Int32 ConditionOf { get; set; }
        [Category("Examination of precordium")]
        [OneThirdWidth]
        public Int32 ScarMarkPrecordium { get; set; }
        [OneThirdWidth]
        public Int32 SwellingPrecordium { get; set; }
        [OneThirdWidth]
        public Int32 VisibleApexBeatPrecordium { get; set; }
        [OneThirdWidth]
        public Int32 VisibleImpulsePrecordium { get; set; }
        [HalfWidth]
        [TextAreaEditor(Rows = 3)]
        public String Alimentary { get; set; }
        [HalfWidth]
        [TextAreaEditor(Rows = 3)]
        public String Respiratory { get; set; }
        [HalfWidth]
        [TextAreaEditor(Rows = 3)]
        public String Cardiovascular { get; set; }
        [HalfWidth]
        [TextAreaEditor(Rows = 3)]
        public String Genitourinary { get; set; }
        [TextAreaEditor(Rows = 3)]
        [HalfWidth]
        public String Locomotor { get; set; }
        [HalfWidth]
        [TextAreaEditor(Rows = 3)]
        public String Haemopoetic { get; set; }
        [Category("Salient Features")]
        [TextAreaEditor(Rows = 6)]
        public String SalientFeatures { get; set; }
        [Category("Diagnosis"), NotMapped]
        [TextAreaEditor(Rows = 3)]
        public String ProvisionalDiagnosis { get; set; }
       
        [DDiagnosisDetailEditor]
        public List<Entities.DDiagnosisDetailsRow> DiagnosisDetails { get; set; }
        [TextAreaEditor(Rows = 12)]
        public String Investigations { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String FinalDiagnosis { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Plandischarge  { get; set; }

        [TextAreaEditor(Rows = 4)]
        public String Summary { get; set; }
        //public List<Entities.AdmissionCcDetailsRow> Differentialdiagnosis { get; set; }
    }
}