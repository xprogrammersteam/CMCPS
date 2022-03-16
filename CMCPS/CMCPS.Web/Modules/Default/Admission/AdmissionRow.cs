
using CMCPS.Modules.Default.Admission;

namespace CMCPS.Default.Entities
{
    using CMC.Default.Entities;
    using CMCPS.Modules.Default.History;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Admission]")]
    [DisplayName("Admission"), InstanceName("Admission")]
    [ReadPermission(PermissionKeys.General)]
    //[ReadPermission(PermissionKeys.Admission.View)]
    [ModifyPermission(PermissionKeys.Admission.Modify)]
    [DeletePermission(PermissionKeys.Admission.Delete)]
    [LookupScript(typeof(Scripts.PatientLookup))]
    //[LookupScript("Default.Admission", Permission = "*", Expiration = -1)]
    public sealed class AdmissionRow : Row, IIdRow, INameRow, IInsertLogRow, IUpdateLogRow
    {
        [DisplayName("Admission Id"), Identity]
        public Int32? AdmissionId
        {
            get { return Fields.AdmissionId[this]; }
            set { Fields.AdmissionId[this] = value; }
        }

        [DisplayName("Admission Date")]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }
        [DisplayName("LMP")]
        public DateTime? LMP
        {
            get { return Fields.LMP[this]; }
            set { Fields.LMP[this] = value; }
        }

        [DisplayName("Time")]
        public TimeSpan? Time
        {
            get { return Fields.Time[this]; }
            set { Fields.Time[this] = value; }
        }

        [DisplayName("Name"), NotNull, LookupInclude, QuickSearch]

        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }
        [Expression("CONCAT(CONCAT(Name, '-'), PinNumber)"), LookupInclude, NotMapped]
        public String NameAndPin
        {
            get { return Fields.NameAndPin[this]; }
            set { Fields.NameAndPin[this] = value; }
        }
        [NotMapped, DisplayName("Discharge"), ForeignKey("[dbo].[Discharge]", "DischargeId"), LeftJoin("jDischarge")]
        public Int32? DischargeId
        {
            get { return Fields.DischargeId[this]; }
            set { Fields.DischargeId[this] = value; }
        }
        [DisplayName("Discharge Date"), Expression("jDischarge.[Date]")]
        public DateTime? DischargeDate
        {
            get { return Fields.DischargeDate[this]; }
            set { Fields.DischargeDate[this] = value; }
        }

        [DisplayName("Age"), QuickSearch]
        public String Age
        {
            get { return Fields.Age[this]; }
            set { Fields.Age[this] = value; }
        }
        [DisplayName("Date of Birth"), QuickSearch]
        public DateTime? DateOfBirth
        {
            get { return Fields.DateOfBirth[this]; }
            set { Fields.DateOfBirth[this] = value; }
        }
        [DisplayName("Gender"), ForeignKey("[dbo].[Sex]", "SexId"), LeftJoin("jSex")]
        [LookupEditor(typeof(SexRow))]
        public Int32? SexId
        {
            get { return Fields.SexId[this]; }
            set { Fields.SexId[this] = value; }
        }

        [DisplayName("Gender"), Expression("jSex.Sex")]
        public String Sex
        {
            get { return Fields.Sex[this]; }
            set { Fields.Sex[this] = value; }
        }
        [DisplayName("Religion")]
        public Religion? Religion
        {
            get { return (Religion?)Fields.Religion[this]; }
            set { Fields.Religion[this] = (Int32?)value; }
        }
        [DisplayName("Cycle")]
        public MenarcheCycle? MenarcheCycle
        {
            get { return (MenarcheCycle?)Fields.MenarcheCycle[this]; }
            set { Fields.MenarcheCycle[this] = (Int32?)value; }
        }

        [DisplayName("Marital Status")]
        public MaritalStatus? MaritalStatus
        {
            get { return (MaritalStatus?)Fields.MaritalStatus[this]; }
            set { Fields.MaritalStatus[this] = (Int32?)value; }
        }
        [DisplayName("Blood Transfusion")]
        public BloodTransfusion? BloodTransfusion
        {
            get { return (BloodTransfusion?)Fields.BloodTransfusion[this]; }
            set { Fields.BloodTransfusion[this] = (Int32?)value; }
        }
        [DisplayName("Person Name")]
        public String EmergencyPerson
        {
            get { return Fields.EmergencyPerson[this]; }
            set { Fields.EmergencyPerson[this] = value; }
        }

        [DisplayName("Age at Menarche")]
        public String AgeAtMenarche
        {
            get { return Fields.AgeAtMenarche[this]; }
            set { Fields.AgeAtMenarche[this] = value; }
        }
        [DisplayName("Age of Menopause")]
        public String AgeOfMenopause
        {
            get { return Fields.AgeOfMenopause[this]; }
            set { Fields.AgeOfMenopause[this] = value; }
        }
        [DisplayName("Age of Last Child")]
        public String AgeOfLastChild
        {
            get { return Fields.AgeOfLastChild[this]; }
            set { Fields.AgeOfLastChild[this] = value; }
        }
        [DisplayName("Address")]
        public String EmergencyPerAddress
        {
            get { return Fields.EmergencyPerAddress[this]; }
            set { Fields.EmergencyPerAddress[this] = value; }
        }
        [DisplayName("Contact Number")]
        public String EmergencyPerMobile
        {
            get { return Fields.EmergencyPerMobile[this]; }
            set { Fields.EmergencyPerMobile[this] = value; }
        }

        [DisplayName("Relation")]
        public EmergencyContactRelation? EmergencyRelation
        {
            get { return (EmergencyContactRelation?)Fields.EmergencyRelation[this]; }
            set { Fields.EmergencyRelation[this] = (Int32?)value; }
        }

        [DisplayName("Ward"), ForeignKey("[dbo].[Ward]", "Id"), LeftJoin("jWard")]
        [LookupEditor(typeof(WardRow))]
        public Int32? WardId
        {
            get { return Fields.WardId[this]; }
            set { Fields.WardId[this] = value; }
        }
        [DisplayName("Ward"), Expression("jWard.WardNo")]
        public String Ward
        {
            get { return Fields.Ward[this]; }
            set { Fields.Ward[this] = value; }
        }
        [DisplayName("Result")]
        public Result? Result
        {
            get { return (Result?)Fields.Result[this]; }
            set { Fields.Result[this] = (Int32?)value; }
        }
        [DisplayName("Pin Number"), QuickSearch, LookupInclude]
        public String PinNumber
        {
            get { return Fields.PinNumber[this]; }
            set { Fields.PinNumber[this] = value; }
        }

        [DisplayName("Unit Number"), ForeignKey("[dbo].[Unit]", "UnitId"), LeftJoin("jUnit")]
        [LookupEditor(typeof(UnitRow), InplaceAdd = true)]
        public Int32? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
        }
        [DisplayName("Unit Number"), Expression("jUnit.UnitNumber")]
        public String UnitNumber
        {
            get { return Fields.UnitNumber[this]; }
            set { Fields.UnitNumber[this] = value; }
        }
        [DisplayName("Unit Reg Number"), QuickSearch]
        public String UnitRegNumber
        {
            get { return Fields.UnitRegNumber[this]; }
            set { Fields.UnitRegNumber[this] = value; }
        }

        [DisplayName("Bed Number"), ForeignKey("[dbo].[Bed]", "BedId"), LeftJoin("jBed")]
        [LookupEditor(typeof(BedRow), InplaceAdd = true)]
        public Int32? BedId
        {
            get { return Fields.BedId[this]; }
            set { Fields.BedId[this] = value; }
        }

        [DisplayName("Bed Number"), Expression("jBed.BedNumber")]
        public String BedNumber
        {
            get { return Fields.BedNumber[this]; }
            set { Fields.BedNumber[this] = value; }
        }

        [DisplayName("Hospital Reg Number")]
        public String HospitalRegNumber
        {
            get { return Fields.HospitalRegNumber[this]; }
            set { Fields.HospitalRegNumber[this] = value; }
        }

        [DisplayName("Blood Group"), ForeignKey("[dbo].[BloodGroups]", "BloodGroupId"), LeftJoin("jBloodGroups")]
        [LookupEditor(typeof(BloodGroupsRow), InplaceAdd = true)]
        public Int32? BloodGroupId
        {
            get { return Fields.BloodGroupId[this]; }
            set { Fields.BloodGroupId[this] = value; }
        }

        [DisplayName("Blood Group"), Expression("jBloodGroups.BloodGroup")]
        public String BloodGroup
        {
            get { return Fields.BloodGroup[this]; }
            set { Fields.BloodGroup[this] = value; }
        }

        public Int32? OperationId
        {
            get { return Fields.OperationId[this]; }
            set { Fields.OperationId[this] = value; }
        }
        public Int32? OperationNoteId
        {
            get { return Fields.OperationNoteId[this]; }
            set { Fields.OperationNoteId[this] = value; }
        }

        [DisplayName("Father's Name")]
        public String FatherName
        {
            get { return Fields.FatherName[this]; }
            set { Fields.FatherName[this] = value; }
        }
        [DisplayName("Father's NID")]
        public String FatherNID
        {
            get { return Fields.FatherNID[this]; }
            set { Fields.FatherNID[this] = value; }
        }
        [DisplayName("Mother's Name")]
        public String MotherName
        {
            get { return Fields.MotherName[this]; }
            set { Fields.MotherName[this] = value; }
        }
        [DisplayName("Mother's NID")]
        public String MotherNID
        {
            get { return Fields.MotherNID[this]; }
            set { Fields.MotherNID[this] = value; }
        }

        [DisplayName("District Name"), ForeignKey("[dbo].[District]", "DistrictId"), LeftJoin("jDistrict")]
        [LookupEditor(typeof(DistrictRow), InplaceAdd = true)]
        public Int32? DistrictId
        {
            get { return Fields.DistrictId[this]; }
            set { Fields.DistrictId[this] = value; }
        }

        [DisplayName("District Name"), Expression("jDistrict.DistrictName")]
        public String DistrictName
        {
            get { return Fields.DistrictName[this]; }
            set { Fields.DistrictName[this] = value; }
        }

        [DisplayName("Upazila Name"), ForeignKey("[dbo].[Upazila]", "UpazilaId"), LeftJoin("jUpazila")]
        [LookupEditor(typeof(UpazilaRow), CascadeFrom = "DistrictId", InplaceAdd = true)]
        public Int32? UpazilaId
        {
            get { return Fields.UpazilaId[this]; }
            set { Fields.UpazilaId[this] = value; }
        }

        [DisplayName("Upazila Name"), Expression("jUpazila.UpazilaName")]
        public String UpazilaName
        {
            get { return Fields.UpazilaName[this]; }
            set { Fields.UpazilaName[this] = value; }
        }
        [DisplayName("House/Vill:")]

        public String House
        {
            get { return Fields.House[this]; }
            set { Fields.House[this] = value; }
        }
        [DisplayName("Post Office")]

        public String PostOffice
        {
            get { return Fields.PostOffice[this]; }
            set { Fields.PostOffice[this] = value; }
        }
        [DisplayName("")]
        public String Doctor
        {
            get { return Fields.Doctor[this]; }
            set { Fields.Doctor[this] = value; }
        }
        [DisplayName("Mobile No")]

        public String Mobile
        {
            get { return Fields.Mobile[this]; }
            set { Fields.Mobile[this] = value; }
        }

        [DisplayName("Socioeconomic History")]
        public String Socioeconomichistory
        {
            get { return Fields.Socioeconomichistory[this]; }
            set { Fields.Socioeconomichistory[this] = value; }
        }
        [DisplayName(""), NotMapped]
        [MasterDetailRelation(foreignKey: "AdmissionId", IncludeColumns = "AdmissionId")]
        public List<AdmissionPpDetailsRow> PPDetailList
        {
            get { return Fields.PPDetailList[this]; }
            set { Fields.PPDetailList[this] = value; }
        }

        [DisplayName(""), NotMapped]
        [MasterDetailRelation(foreignKey: "AdmissionId", IncludeColumns = "PComplaints")]
        public List<AdmissionCcDetailsRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }
        [NotMapped, DisplayName("Differential diagnosis")]
        [MasterDetailRelation(foreignKey: "AdmissionId", IncludeColumns = "Diagnosis")]
        public List<DDiagnosisDetailsRow> DiagnosisDetails
        {
            get { return Fields.DiagnosisDetails[this]; }
            set { Fields.DiagnosisDetails[this] = value; }
        }
        [DisplayName("H/O Present Illness"), QuickSearch]
        public String HistoryOfPresentIllness
        {
            get { return Fields.HistoryOfPresentIllness[this]; }
            set { Fields.HistoryOfPresentIllness[this] = value; }
        }

        [DisplayName("Past Illness & Relevant Management"), Column("HOPastIllness")]
        public String HoPastIllness
        {
            get { return Fields.HoPastIllness[this]; }
            set { Fields.HoPastIllness[this] = value; }
        }

        [DisplayName("Drug History")]
        public String DrugHistory
        {
            get { return Fields.DrugHistory[this]; }
            set { Fields.DrugHistory[this] = value; }
        }
        [DisplayName("Milestone of Development")]
        public String Milestone
        {
            get { return Fields.Milestone[this]; }
            set { Fields.Milestone[this] = value; }
        }

        [DisplayName("Allergic History")]
        public String AllergicHistory
        {
            get { return Fields.AllergicHistory[this]; }
            set { Fields.AllergicHistory[this] = value; }
        }
        [DisplayName("Feeding History")]
        public FeedingHistory? Feedinghistory
        {
            get { return (FeedingHistory?)Fields.Feedinghistory[this]; }
            set { Fields.Feedinghistory[this] = (Int32?)value; }
        }
        [NotMapped]
        [DisplayName("Added sound")]
        public NoneDate? AddedSound
        {
            get { return (NoneDate?)Fields.AddedSound[this]; }
            set { Fields.AddedSound[this] = (Int32?)value; }
        }
        [NotMapped]
        [DisplayName("Crepitation")]
        public GeneralPartEnum? Crepitation
        {
            get { return (GeneralPartEnum?)Fields.Crepitation[this]; }
            set { Fields.Crepitation[this] = (Int32?)value; }
        }
        [NotMapped]
        [DisplayName("Rub")]
        public GeneralPartEnum? Rub
        {
            get { return (GeneralPartEnum?)Fields.Rub[this]; }
            set { Fields.Rub[this] = (Int32?)value; }
        }
        [NotMapped]
        [DisplayName("Rhonchi")]
        public GeneralPartEnum? Rhonchi
        {
            get { return (GeneralPartEnum?)Fields.Rhonchi[this]; }
            set { Fields.Rhonchi[this] = (Int32?)value; }
        }

        //[DisplayName("Feeding History")]
        //public String Feedinghistory
        //{
        //    get { return Fields.Feedinghistory[this]; }
        //    set { Fields.Feedinghistory[this] = value; }
        //}
        [DisplayName("Social & Personal History")]
        public String SocialPersonalHistory
        {
            get { return Fields.SocialPersonalHistory[this]; }
            set { Fields.SocialPersonalHistory[this] = value; }
        }
        [DisplayName("Travel History")]
        public String Travelhistory
        {
            get { return Fields.Travelhistory[this]; }
            set { Fields.Travelhistory[this] = value; }
        }
        [DisplayName("Co-morbid Disease/Conditions")]
        public String Conditions
        {
            get { return Fields.Conditions[this]; }
            set { Fields.Conditions[this] = value; }
        }

        [DisplayName("Consanguinity"), ForeignKey("[dbo].[Consanguinity]", "ConsanguinityId"), LeftJoin("jConsanguinity")]
        [LookupEditor(typeof(ConsanguinityRow))]
        public Int32? ConsanguinityId
        {
            get { return Fields.ConsanguinityId[this]; }
            set { Fields.ConsanguinityId[this] = value; }
        }

        [DisplayName("Consanguinity"), Expression("jConsanguinity.Consanguinity")]
        public String Consanguinity
        {
            get { return Fields.Consanguinity[this]; }
            set { Fields.Consanguinity[this] = value; }
        }



        [DisplayName("Antenatal")]
        [LookupEditor(typeof(AntenatalRow), Multiple = true, InplaceAdd = true), NotMapped]
        [LinkingSetRelation(typeof(AntenatalHistoryRow), "AdmissionId", "AntenatalId")]
        public List<Int32> AntenatalList
        {
            get { return Fields.AntenatalList[this]; }
            set { Fields.AntenatalList[this] = value; }
        }
        [DisplayName("Natal")]
        [LookupEditor(typeof(NatalRow), Multiple = true, InplaceAdd = true), NotMapped]
        [LinkingSetRelation(typeof(NatalHistoryRow), "AdmissionId", "NatalId")]
        public List<Int32> NatalList
        {
            get { return Fields.NatalList[this]; }
            set { Fields.NatalList[this] = value; }
        }

        [DisplayName("Illness")]
        [LookupEditor(typeof(IllNessRow), Multiple = true, InplaceAdd = true), NotMapped]
        [LinkingSetRelation(typeof(IllnessHistoryRow), "AdmissionId", "IllnessId")]
        public List<Int32> IllnessList
        {
            get { return Fields.NatalList[this]; }
            set { Fields.NatalList[this] = value; }
        }

        [LookupEditor(typeof(MajorSurgeryRow), InplaceAdd = true)]
        [DisplayName("Major Surgery"), NotMapped, ForeignKey("[dbo].[MajorSurgery]", "MajorSurgeryId"), LeftJoin("jMajorSurgery"), TextualField("MajorSurgeryName")]
        public Int32? MajorSurgeryId
        {
            get { return Fields.MajorSurgeryId[this]; }
            set { Fields.MajorSurgeryId[this] = value; }
        }

        [DisplayName("Percussion note")]
        [LookupEditor(typeof(PercussionRow), Multiple = true, InplaceAdd = true), NotMapped]
        [LinkingSetRelation(typeof(PercussionHistoryRow), "AdmissionId", "PercussionId")]
        public List<Int32> PercussionList
        {
            get { return Fields.PercussionList[this]; }
            set { Fields.PercussionList[this] = value; }
        }
        [DisplayName("Auscultation")]
        [LookupEditor(typeof(AuscultationRow), Multiple = true, InplaceAdd = true), NotMapped]
        [LinkingSetRelation(typeof(AuscultationHistoryRow), "AdmissionId", "AuscultationId")]
        public List<Int32> AuscultationList
        {
            get { return Fields.AuscultationList[this]; }
            set { Fields.AuscultationList[this] = value; }
        }
        [DisplayName("Breath Sound")]
        [LookupEditor(typeof(BreathSoundRow), Multiple = true, InplaceAdd = true), NotMapped]
        [LinkingSetRelation(typeof(BreathSoundHistoryRow), "AdmissionId", "BreathSoundId")]
        public List<Int32> BreathSoundList
        {
            get { return Fields.BreathSoundList[this]; }
            set { Fields.BreathSoundList[this] = value; }
        }
        [NotMapped]
        [DisplayName("Vocal resonance")]
        [LookupEditor(typeof(VocalResonanceRow), Multiple = true, InplaceAdd = true)]
        [LinkingSetRelation(typeof(VocalResonanceHistoryRow), "AdmissionId", "VocalResonanceId")]
        public List<Int32> VocalResonanceList
        {
            get { return Fields.VocalResonanceList[this]; }
            set { Fields.VocalResonanceList[this] = value; }
        }

        [NotMapped]
        public String AddtoMajorSurgery
        {
            get { return Fields.AddtoMajorSurgery[this]; }
            set { Fields.AddtoMajorSurgery[this] = value; }
        }
        //[NotMapped]
        //public checked NAD{
        //     get { return Fields.AgeAtMenarcheLabel[this]; }
        //    set { Fields.AgeAtMenarcheLabel[this] = value; }
        //}
        [NotMapped]
        [DisplayName("NAD")]
        public Boolean? IsNAD
        {
            get { return Fields.IsNAD[this]; }
            set { Fields.IsNAD[this] = value; }
        }
        [NotMapped]
        [ReadOnly(true)]
        public string RR
        {
            get { return Fields.RR[this]; }
            set { Fields.RR[this] = value; }
        }
        [NotMapped]
        public MusclesEnum? Muscles 
        {
            get { return (MusclesEnum?)Fields.Muscles[this]; }
            set { Fields.Muscles[this] = (Int32?)value; }
        }
        [NotMapped]
        public GeneralPartEnum? Stridor
        {
            get { return (GeneralPartEnum?)Fields.Stridor[this]; }
            set { Fields.Stridor[this] = (Int32?)value; }
        }
        [NotMapped]
        public GeneralPartEnum? NicotineStain
        {
            get { return (GeneralPartEnum?)Fields.NicotineStain[this]; }
            set { Fields.NicotineStain[this] = (Int32?)value; }
        }
        [NotMapped]
        public GeneralPartEnum? Asterixis
        {
            get { return (GeneralPartEnum?)Fields.Asterixis[this]; }
            set { Fields.Asterixis[this] = (Int32?)value; }
        }
        [NotMapped]
        public SkinEnum? Skin
        {
            get { return (SkinEnum?)Fields.Skin[this]; }
            set { Fields.Skin[this] = (Int32?)value; }
        }
        [NotMapped]
        public String SkinText
        {
            get { return Fields.SkinText[this]; }
            set { Fields.SkinText[this] = value; }
        }
        [NotMapped]
        public GeneralPartEnum? ScarMark
        {
            get { return (GeneralPartEnum?)Fields.ScarMark[this]; }
            set { Fields.ScarMark[this] = (Int32?)value; }
        }
        [NotMapped]
        public GeneralPartEnum? Swelling
        {
            get { return (GeneralPartEnum?)Fields.Swelling[this]; }
            set { Fields.Swelling[this] = (Int32?)value; }
        }
        [NotMapped]
        public ShapeChest? ShapeChest
        {
            get { return (ShapeChest?)Fields.ShapeChest[this]; }
            set { Fields.ShapeChest[this] = (Int32?)value; }
        }
        [NotMapped]
        public GeneralPartEnum? VisibleVein
        {
            get { return (GeneralPartEnum?)Fields.VisibleVein[this]; }
            set { Fields.VisibleVein[this] = (Int32?)value; }
        }
        [NotMapped]
        public GeneralPartEnum? SupraclavicularIndrawing
        {
            get { return (GeneralPartEnum?)Fields.SupraclavicularIndrawing[this]; }
            set { Fields.SupraclavicularIndrawing[this] = (Int32?)value; }
        }
        [NotMapped]
        public GeneralPartEnum? TrachealTag
        {
            get { return (GeneralPartEnum?)Fields.TrachealTag[this]; }
            set { Fields.TrachealTag[this] = (Int32?)value; }
        }
        [NotMapped]
        public GeneralPartEnum? ICTSitu
        {
            get { return (GeneralPartEnum?)Fields.ICTSitu[this]; }
            set { Fields.ICTSitu[this] = (Int32?)value; }
        }
        [NotMapped]
        public GeneralPartEnum? RadiationMark
        {
            get { return (GeneralPartEnum?)Fields.RadiationMark[this]; }
            set { Fields.RadiationMark[this] = (Int32?)value; }
        }
        [NotMapped]
        public GeneralPartEnum? ApexBeat
        {
            get { return (GeneralPartEnum?)Fields.ApexBeat[this]; }
            set { Fields.ApexBeat[this] = (Int32?)value; }
        }
        [NotMapped]
        [ReadOnly(true)]
        public CyanosisEnum? CyanosisReSelect
        {
            get { return (CyanosisEnum?)Fields.CyanosisReSelect[this]; }
            set { Fields.CyanosisReSelect[this] = (Int32?)value; }
        }

        [NotMapped]
        [ReadOnly(true)]
        public ClubbingEnum? ClubbingReSelect
        {
            get { return (ClubbingEnum?)Fields.ClubbingReSelect[this]; }
            set { Fields.ClubbingReSelect[this] = (Int32?)value; }
        }
        [NotMapped]
        [ReadOnly(true)]
        public temperatureEnum? JVPReSelect
        {
            get { return (temperatureEnum?)Fields.JVPReSelect[this]; }
            set { Fields.JVPReSelect[this] = (Int32?)value; }
        }
        [NotMapped]
        [ReadOnly(true)]
        public LymphEnum? LymphReSelect
        {
            get { return (LymphEnum?)Fields.LymphReSelect[this]; }
            set { Fields.LymphReSelect[this] = (Int32?)value; }
        }
        [NotMapped]
        public String AgeAtMenarcheLabel
        {
            get { return Fields.AgeAtMenarcheLabel[this]; }
            set { Fields.AgeAtMenarcheLabel[this] = value; }
        }
        [NotMapped]
        public String AgeAtMenarcheLabel1
        {
            get { return Fields.AgeAtMenarcheLabel1[this]; }
            set { Fields.AgeAtMenarcheLabel1[this] = value; }
        }
        [NotMapped]
        public String AgeAtMenarcheLabel2
        {
            get { return Fields.AgeAtMenarcheLabel2[this]; }
            set { Fields.AgeAtMenarcheLabel2[this] = value; }
        }
        [DisplayName("")]
        public String MajorSurgery
        {
            get { return Fields.MajorSurgery[this]; }
            set { Fields.MajorSurgery[this] = value; }
        }

        [DisplayName("Regular Medication"), ForeignKey("[dbo].[RegularMedication]", "RegularMedicationId"), LeftJoin("jRegularMedication")]
        [LookupEditor(typeof(RegularMedicationRow), InplaceAdd = true)]
        public Int32? RegularMedicationId
        {
            get { return Fields.RegularMedicationId[this]; }
            set { Fields.RegularMedicationId[this] = value; }
        }

        [DisplayName("Regular Medication"), Expression("jRegularMedication.RegularMedicationName")]
        public String RegularMedicationName
        {
            get { return Fields.RegularMedicationName[this]; }
            set { Fields.RegularMedicationName[this] = value; }
        }

        [DisplayName("History Immunization")]
        [LookupEditor(typeof(ImmunizationRow), Multiple = true, InplaceAdd = true), NotMapped]
        [LinkingSetRelation(typeof(ImmunizationHistoryRow), "AdmissionId", "ImmunizationId")]
        public List<Int32> ImmunizationList
        {
            get { return Fields.ImmunizationList[this]; }
            set { Fields.ImmunizationList[this] = value; }
        }
        [DisplayName("Family History of such disease")]
        public FamilyHistoryDisease? FamilyHistoryDiseaseId
        {
            get { return (FamilyHistoryDisease?)Fields.FamilyHistoryDiseaseId[this]; }
            set { Fields.FamilyHistoryDiseaseId[this] = (Int32?)value; }
        }
        [DisplayName("Post Natal")]
        [LookupEditor(typeof(PostNatalRow), Multiple = true, InplaceAdd = true), NotMapped]
        [LinkingSetRelation(typeof(PostNatalHistoryRow), "AdmissionId", "PostNatalId")]
        public List<Int32> PostNatalList
        {
            get { return Fields.PostNatalList[this]; }
            set { Fields.PostNatalList[this] = value; }
        }
        [DisplayName("Family History"), ForeignKey("[dbo].[FamilyHistory]", "FamilyHistoryId"), LeftJoin("jFamilyHistory"), TextualField("FamilyHistory")]
        [LookupEditor(typeof(FamilyHistoryRow), InplaceAdd = true)]
        public Int32? FamilyHistoryId
        {
            get { return Fields.FamilyHistoryId[this]; }
            set { Fields.FamilyHistoryId[this] = value; }
        }
        [DisplayName("Family History"), Expression("jFamilyHistory.FamilyHistory")]
        public String FamilyHistory
        {
            get { return Fields.FamilyHistory[this]; }
            set { Fields.FamilyHistory[this] = value; }
        }
      

        [DisplayName("Immunization History")]
        public Immunization? Immunization
        {
            get { return (Immunization?)Fields.Immunization[this]; }
            set { Fields.Immunization[this] = (Int32?)value; }
        }
        [DisplayName("Weight (kg)"), QuickSearch]
        public int? Weight
        {
            get { return Fields.Weight[this]; }
            set { Fields.Weight[this] = value; }
        }
        [DisplayName("Height (Inch)"), QuickSearch]
        public String Height
        {
            get { return Fields.Height[this]; }
            set { Fields.Height[this] = value; }
        }

        [DisplayName("Anaemia"), ForeignKey("[dbo].[AnemiaAndJaundice]", "AnemiaAndJaundiceId"), LeftJoin("jAnemia")]
        [LookupEditor(typeof(AnemiaAndJaundiceRow))]
        public Int32? AnemiaId
        {
            get { return Fields.AnemiaId[this]; }
            set { Fields.AnemiaId[this] = value; }
        }

        [DisplayName("Anaemia"), Expression("jAnemia.Name")]
        public String Anaemia
        {
            get { return Fields.Anaemia[this]; }
            set { Fields.Anaemia[this] = value; }
        }


        //[DisplayName("Anaemia")]
        //public AnemiaAndJaundiceValue? Anemia
        //{
        //    get { return (AnemiaAndJaundiceValue?)Fields.Anemia[this]; }
        //    set { Fields.Anemia[this] = (Int32?)value; }
        //}

        [DisplayName("Jaundice"), ForeignKey("[dbo].[AnemiaAndJaundice]", "AnemiaAndJaundiceId"), LeftJoin("jJaundice")]
        [LookupEditor(typeof(AnemiaAndJaundiceRow))]
        public Int32? JaundiceId
        {
            get { return Fields.JaundiceId[this]; }
            set { Fields.JaundiceId[this] = value; }
        }

        [DisplayName("Jaundice"), Expression("jJaundice.Name")]
        public String Jaundice
        {
            get { return Fields.Jaundice[this]; }
            set { Fields.Jaundice[this] = value; }
        }

        [DisplayName("Cyanosis")]
        public CyanosisEnum? Cyanosis
        {
            get { return (CyanosisEnum?)Fields.Cyanosis[this]; }
            set { Fields.Cyanosis[this] = (Int32?)value; }
        }

        [DisplayName("Eedema"), ForeignKey("[dbo].[Oedema]", "OedemaId"), LeftJoin("jOedema")]
        [LookupEditor(typeof(OedemaRow))]
        public Int32? OedemaId
        {
            get { return Fields.OedemaId[this]; }
            set { Fields.OedemaId[this] = value; }
        }

        [DisplayName("Edema"), Expression("jOedema.Oedema")]
        public String Oedema
        {
            get { return Fields.Oedema[this]; }
            set { Fields.Oedema[this] = value; }
        }
        //[DisplayName("Edema")]
        //public EdemaValue? Oedema
        //{
        //    get { return (EdemaValue?)Fields.Oedema[this]; }
        //    set { Fields.Oedema[this] =(Int32?) value; }
        //}


        //[DisplayName("Dehydration"), ForeignKey("[dbo].[Dehydration]", "DehydrationId"), LeftJoin("jDehydration")]
        //[LookupEditor(typeof(DehydrationRow))]
        public GeneralEnum? DehydrationId
        {
            get { return (GeneralEnum?)Fields.DehydrationId[this]; }
            set { Fields.DehydrationId[this] = (Int32?)value; }
        }
        [DisplayName("Clubbing")]
        public ClubbingEnum? Clubbing
        {
            get { return (ClubbingEnum?)Fields.Clubbing[this]; }
            set { Fields.Clubbing[this] = (Int32?)value; }
        }
        [DisplayName("Koilonychia")]
        public GeneralPartEnum? Koilonychia
        {
            get { return (GeneralPartEnum?)Fields.Koilonychia[this]; }
            set { Fields.Koilonychia[this] = (Int32?)value; }
        }
        [DisplayName("Leukonychia")]
        public GeneralPartEnum? Leukonychia
        {
            get { return (GeneralPartEnum?)Fields.Leukonychia[this]; }
            set { Fields.Leukonychia[this] = (Int32?)value; }
        }
        [DisplayName("Edema")]
        public GeneralEnum? Edema
        {
            get { return (GeneralEnum?)Fields.Edema[this]; }
            set { Fields.Edema[this] = (Int32?)value; }
        }

        [DisplayName("Neck Venis")]
        public NeckveinsEnum? NeckVeins
        {
            get { return (NeckveinsEnum?)Fields.NeckVeins[this]; }
            set { Fields.NeckVeins[this] = (Int32?)value; }
        }
        [DisplayName("JVP")]
        public temperatureEnum? JVP
        {
            get { return (temperatureEnum?)Fields.JVP[this]; }
            set { Fields.JVP[this] = (Int32?)value; }
        }
        [DisplayName("Bony Tenderness")]
        public GeneralPartEnum? BonyTenderness
        {
            get { return (GeneralPartEnum?)Fields.BonyTenderness[this]; }
            set { Fields.BonyTenderness[this] = (Int32?)value; }
        }

        [DisplayName("Thyroid Gland")]
        public LymphEnum? ThyroidGland
        {
            get { return (LymphEnum?)Fields.ThyroidGland[this]; }
            set { Fields.ThyroidGland[this] = (Int32?)value; }
        }

        [DisplayName("Dehydration"), Expression("jDehydration.Dehydration")]
        public String Dehydration
        {
            get { return Fields.Dehydration[this]; }
            set { Fields.Dehydration[this] = value; }
        }
        //[DisplayName("Dehydration")]
        //public DehydrationValue? Dehydration
        //{
        //    get { return (DehydrationValue?)Fields.Dehydration[this]; }
        //    set { Fields.Dehydration[this] = (Int32?)value; }
        //}

        [DisplayName("Pulse Rate(98 Per Minute)")]
        public String Pulse
        {
            get { return Fields.Pulse[this]; }
            set { Fields.Pulse[this] = value; }
        }

        [DisplayName("BP (mm of Hg)")]
        public String BP
        {
            get { return Fields.BP[this]; }
            set { Fields.BP[this] = value; }
        }

        [DisplayName("Res Rate(bpm)")]
        public String RespRate
        {
            get { return Fields.RespRate[this]; }
            set { Fields.RespRate[this] = value; }
        }

        [DisplayName("Temperature (°F)")]
        public String Temperature
        {
            get { return Fields.Temperature[this]; }
            set { Fields.Temperature[this] = value; }
        }
        [DisplayName("Appearance")]
        public AppearanceEnum? Appearance
        {
            get { return (AppearanceEnum?)Fields.Appearance[this]; }
            set { Fields.Appearance[this] = (Int32?)value; }
        }

        [DisplayName("Body Build")]
        public Bodybuilt? BodyBuild
        {
            get { return (Bodybuilt?)Fields.BodyBuild[this]; }
            set { Fields.BodyBuild[this] = (Int32?)value; }
        }
        [DisplayName("Co-Operation")]
        public String CoOperation
        {
            get { return Fields.CoOperation[this]; }
            set { Fields.CoOperation[this] = value; }
        }
        [DisplayName("Head Circumference (cm)")]
        public String Circumference
        {
            get { return Fields.Circumference[this]; }
            set { Fields.Circumference[this] = value; }
        }
        [DisplayName("Decubitus")]
        public DecuibitusEnum? Decubitus
        {
            get { return (DecuibitusEnum?)Fields.Decubitus[this]; }
            set { Fields.Decubitus[this] = (Int32?)value; }
        }
        [DisplayName("Decubitus")]
        public Behaviour? Behaviour
        {
            get { return (Behaviour?)Fields.Behaviour[this]; }
            set { Fields.Behaviour[this] = (Int32?)value; }
        }
        [DisplayName("Sign of meningeal irritation")]
        public SignMeningeal? SignMeningeal
        {
            get { return (SignMeningeal?)Fields.SignMeningeal[this]; }
            set { Fields.SignMeningeal[this] = (Int32)value; }
        }
        [DisplayName("Nutrition")]
        public String Nutrition
        {
            get { return Fields.Nutrition[this]; }
            set { Fields.Nutrition[this] = value; }
        }
        [DisplayName("Lymph Node")]
        public LymphNode? LymphNode
        {
            get { return (LymphNode?)Fields.LymphNode[this]; }
            set { Fields.LymphNode[this] = (Int32?)value; }
        }
        [DisplayName("Site")]
        public Site? Site
        {
            get { return (Site?)Fields.Site[this]; }
            set { Fields.Site[this] = (Int32?)value; }
        }
        [DisplayName("Other"),TextAreaEditor(Rows =3)]
        public String GEOther
        {
            get { return Fields.GEOther[this]; }
            set { Fields.GEOther[this] = value; }
        }
        [DisplayName("Size")]
        public String Size
        {
            get { return Fields.Size[this]; }
            set { Fields.Size[this] = value; }
        }
        [DisplayName("Tenderness")]
        public GeneralPartEnum? Tenderness
        {
            get { return (GeneralPartEnum?)Fields.Tenderness[this]; }
            set { Fields.Tenderness[this] = (Int32?)value; }
        }
        [DisplayName("Consistency")]
        public ConsistencyEnum? Consistency
        {
            get { return (ConsistencyEnum?)Fields.Consistency[this]; }
            set { Fields.Consistency[this] = (Int32?)value; }
        }
        [DisplayName("Fixation")]
        public FixationEnum? Fixation
        {
            get { return (FixationEnum?)Fields.Fixation[this]; }
            set { Fields.Fixation[this] = (Int32?)value; }
        }
        [DisplayName("Local Temperature")]
        public temperatureEnum? LocalTemperature
        {
            get { return (temperatureEnum?)Fields.LocalTemperature[this]; }
            set { Fields.LocalTemperature[this] = (Int32?)value; }
        }
        [DisplayName("Discharging Sinus")]
        public GeneralPartEnum? DischargingSinus
        {
            get { return (GeneralPartEnum?)Fields.DischargingSinus[this]; }
            set { Fields.DischargingSinus[this] = (Int32?)value; }
        }
        [DisplayName("Examination Region")]
        public ExaminationRegion? ExaminationRegion
        {
            get { return (ExaminationRegion?)Fields.ExaminationRegion[this]; }
            set { Fields.ExaminationRegion[this] = (Int32?)value; }
        }
        [NotMapped]
        public PositionTrachea? PositionTrachea
        {
            get { return (PositionTrachea?)Fields.PositionTrachea[this]; }
            set { Fields.PositionTrachea[this] = (Int32?)value; }
        }
        [NotMapped]
        public PositionApexBeat? PositionApexBeat
        {
            get { return (PositionApexBeat?)Fields.PositionApexBeat[this]; }
            set { Fields.PositionApexBeat[this] = (Int32?)value; }
        }
        [NotMapped]
        public VocalFremitus? VocalFremitus
        {
            get { return (VocalFremitus?)Fields.VocalFremitus[this]; }
            set { Fields.VocalFremitus[this] = (Int32?)value; }
        }
        [NotMapped]
        public VocalFremitus? ChestExpansibility
        {
            get { return (VocalFremitus?)Fields.ChestExpansibility[this]; }
            set { Fields.ChestExpansibility[this] = (Int32?)value; }
        }
        [NotMapped]
        public Percussion? PercussionNote
        {
            get { return (Percussion?)Fields.PercussionNote[this]; }
            set { Fields.PercussionNote[this] = (Int32?)value; }
        }
        public String Inspection
        {
            get { return Fields.Inspection[this]; }
            set { Fields.Inspection[this] = value; }
        }

        [DisplayName("Palpation")]
        public String Palpation
        {
            get { return Fields.Palpation[this]; }
            set { Fields.Palpation[this] = value; }
        }

        [DisplayName("Percussion")]
        public String Percussion
        {
            get { return Fields.Percussion[this]; }
            set { Fields.Percussion[this] = value; }
        }
        [NotMapped]
        [DisplayName("Auscultation")]
        public String Auscultation
        {
            get { return Fields.Auscultation[this]; }
            set { Fields.Auscultation[this] = value; }
        }

        [DisplayName("Other")]
        public String Other
        {
            get { return Fields.Other[this]; }
            set { Fields.Other[this] = value; }
        }
        [DisplayName("Alimentary")]
        public String Alimentary
        {
            get { return Fields.Alimentary[this]; }
            set { Fields.Alimentary[this] = value; }
        }

        [DisplayName("Respiratory")]
        public String Respiratory
        {
            get { return Fields.Respiratory[this]; }
            set { Fields.Respiratory[this] = value; }
        }

        [DisplayName("Cardiovascular")]
        public String Cardiovascular
        {
            get { return Fields.Cardiovascular[this]; }
            set { Fields.Cardiovascular[this] = value; }
        }

        [DisplayName("Genitourinary")]
        public String Genitourinary
        {
            get { return Fields.Genitourinary[this]; }
            set { Fields.Genitourinary[this] = value; }
        }

        [DisplayName("Locomotor")]
        public String Locomotor
        {
            get { return Fields.Locomotor[this]; }
            set { Fields.Locomotor[this] = value; }
        }
        [DisplayName("Haemopoetic")]
        public String Haemopoetic
        {
            get { return Fields.Haemopoetic[this]; }
            set { Fields.Haemopoetic[this] = value; }
        }
        [DisplayName("Salient Features")]
        public String SalientFeatures
        {
            get { return Fields.SalientFeatures[this]; }
            set { Fields.SalientFeatures[this] = value; }
        }
        [DisplayName("Provisional Diagnosis")]
        public String ProvisionalDiagnosis
        {
            get { return Fields.ProvisionalDiagnosis[this]; }
            set { Fields.ProvisionalDiagnosis[this] = value; }
        }
        [DisplayName("Investigations")]
        public String Investigations
        {
            get { return Fields.Investigations[this]; }
            set { Fields.Investigations[this] = value; }
        }
        [DisplayName("Final Diagnosis")]
        public String FinalDiagnosis
        {
            get { return Fields.FinalDiagnosis[this]; }
            set { Fields.FinalDiagnosis[this] = value; }
        }
        [DisplayName("Plan on Discharge")]
        public String Plandischarge
        {
            get { return Fields.Plandischarge[this]; }
            set { Fields.Plandischarge[this] = value; }
        }
        [DisplayName("BMI")]
        public String BMI
        {
            get { return Fields.BMI[this]; }
            set { Fields.BMI[this] = value; }
        }
        [LookupInclude]
        public Boolean? PatientType
        {
            get { return Fields.PatientType[this]; }
            set { Fields.PatientType[this] = value; }
        }
        //[NotNull, Insertable(false), Updatable(false)]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }
        [DisplayName("Summary")]
        public String Summary
        {
            get { return Fields.Summary[this]; }
            set { Fields.Summary[this] = value; }
        }


        [DisplayName("Pulse Rate(bmp)")]
        [NotMapped]
        public String PulseRate
        {
            get { return Fields.PulseRate[this]; }
            set { Fields.PulseRate[this] = value; }
        }
        [DisplayName("Pulse Rhythm")]
        [NotMapped]
        public MenarcheCycle? Rhythm
        {
            get { return (MenarcheCycle?)Fields.Rhythm[this]; }
            set { Fields.Rhythm[this] = (Int32?)value; }
        }

        [DisplayName("Pulse Volume")]
        [NotMapped]
        public VolumeEnum? Volume
        {
            get { return (VolumeEnum?)Fields.Volume[this]; }
            set { Fields.Volume[this] = (Int32?)value; }
        }
        [DisplayName("Pulse Character")]
        [NotMapped]
        public CharacterEnum? Character
        {
            get { return (CharacterEnum?)Fields.Character[this]; }
            set { Fields.Character[this] = (Int32?)value; }
        }
        [DisplayName("Redio-Femoral Delay")]
        [NotMapped]
        public GeneralPartEnum? RedioFemoralDelay
        {
            get { return (GeneralPartEnum?)Fields.RedioFemoralDelay[this]; }
            set { Fields.RedioFemoralDelay[this] = (Int32?)value; }
        }
        [DisplayName("Condition of arterial wall")]
        [NotMapped]
        public ConditionEnum? ConditionOf
        {
            get { return (ConditionEnum?)Fields.ConditionOf[this]; }
            set { Fields.ConditionOf[this] = (Int32?)value; }
        }
        
        [DisplayName("Blood Pressure(mm of Hg)")]
        public String BloodPressure
        {
            get { return Fields.BloodPressure[this]; }
            set { Fields.BloodPressure[this] = value; }
        }
        [DisplayName("Neck Venis")]
        [NotMapped]
        public NeckVenisEnum? NeckVenis
        {
            get { return (NeckVenisEnum?)Fields.NeckVenis[this]; }
            set { Fields.NeckVenis[this] = (Int32?)value; }
        }

        [NotMapped]
        [DisplayName("JVP")]
        [ReadOnly(true)]
        public temperatureEnum? JVPReSelectCardiovascular
        {
            get { return (temperatureEnum?)Fields.JVPReSelectCardiovascular[this]; }
            set { Fields.JVPReSelectCardiovascular[this] = (Int32?)value; }
        }
        [NotMapped]
        [DisplayName("Thyroid")]
        [ReadOnly(true)]
        public LymphEnum? Thyroid
        {
            get { return (LymphEnum?)Fields.Thyroid[this]; }
            set { Fields.Thyroid[this] = (Int32?)value; }
        }

        [NotMapped]
        [DisplayName("Scar Mark")]
        public GeneralPartEnum? ScarMarkPrecordium
        {
            get { return (GeneralPartEnum?)Fields.ScarMarkPrecordium[this]; }
            set { Fields.ScarMarkPrecordium[this] = (Int32?)value; }
        }
        [NotMapped]
        [DisplayName("Swelling")]
        public GeneralPartEnum? SwellingPrecordium
        {
            get { return (GeneralPartEnum?)Fields.SwellingPrecordium[this]; }
            set { Fields.SwellingPrecordium[this] = (Int32?)value; }
        }
        [NotMapped]
        [DisplayName("Visible apex beat")]
        public GeneralPartEnum? VisibleApexBeatPrecordium
        {
            get { return (GeneralPartEnum?)Fields.VisibleApexBeatPrecordium[this]; }
            set { Fields.VisibleApexBeatPrecordium[this] = (Int32?)value; }
        }
        [NotMapped]
        [DisplayName("Visible impulse")]
        public Precordium? VisibleImpulsePrecordium
        {
            get { return (Precordium?)Fields.VisibleImpulsePrecordium[this]; }
            set { Fields.VisibleImpulsePrecordium[this] = (Int32?)value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AdmissionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }


        IIdField IInsertLogRow.InsertUserIdField
        {
            get { return Fields.InsertUserId; }
        }

        DateTimeField IInsertLogRow.InsertDateField
        {
            get { return Fields.InsertDate; }
        }
        IIdField IUpdateLogRow.UpdateUserIdField
        {
            get { return Fields.UpdateUserId; }
        }

        DateTimeField IUpdateLogRow.UpdateDateField
        {
            get { return Fields.UpdateDate; }
        }

        public static readonly RowFields Fields = new RowFields().Init();
        
        public AdmissionRow(): base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            
            public Int32Field AdmissionId;
            public Int32Field DischargeId;
            public Int32Field OperationId;
            public Int32Field OperationNoteId;
            public DateTimeField Date;
            public DateTimeField LMP;
            public DateTimeField DischargeDate;
            public TimeSpanField Time;

            public StringField Name;
            public StringField NameAndPin;
            public StringField Age;
            public DateTimeField DateOfBirth;
            public Int32Field SexId;
            public Int32Field Religion; 
            public Int32Field MaritalStatus; 
            public Int32Field BloodTransfusion; 
            public Int32Field EmergencyRelation; 
            public Int32Field WardId;
            public StringField Ward;
            public Int32Field Result;
            public Int32Field LymphNode;
            public Int32Field Site;
            public Int32Field ExaminationRegion;
            public Int32Field Tenderness;
            public Int32Field Consistency;
            public Int32Field Fixation;
            public Int32Field LocalTemperature;
            public Int32Field DischargingSinus;
            public StringField Sex;
            public StringField Size;
            public StringField PinNumber;
            public Int32Field UnitId;
            public StringField UnitNumber;
            public StringField UnitRegNumber;

            public Int32Field BedId;
            public StringField BedNumber;
            public StringField HospitalRegNumber;

            public StringField FatherName;
            public StringField FatherNID;
            public StringField MotherName;
            public StringField MotherNID;
            public Int32Field DistrictId;
            public StringField DistrictName;
            public Int32Field UpazilaId;
            public StringField UpazilaName;
            public StringField House;
            public StringField PostOffice;
            public StringField Mobile;

            //public Int32Field PComplaintsId;
            public StringField AllergicHistory;

            public StringField HistoryOfPresentIllness;
            public StringField HoPastIllness;
            public StringField DrugHistory;
            //public Int32Field BirthHistoryId;
            //public ListField<Int32> BirthHistoryList;
            public ListField<Int32> AntenatalList;
            public ListField<Int32> NatalList;
            public ListField<Int32> ImmunizationList;
            public ListField<Int32> PostNatalList;
            public ListField<Int32> IllnessList;
            public ListField<Int32> PercussionList;
            public ListField<Int32> AuscultationList;
            public ListField<Int32> BreathSoundList;
            public ListField<Int32> VocalResonanceList;

            public Int32Field FamilyHistoryId;
            public StringField FamilyHistory;
            public BooleanField PatientType;

            public Int32Field Immunization;
            public Int32Field FamilyHistoryDiseaseId;


            public Int32Field Weight;
            public StringField Height;
            public Int32Field AnemiaId;
            public StringField Anaemia;
            public Int32Field JaundiceId;
            public StringField Jaundice;
            public Int32Field Cyanosis;
            public Int32Field CyanosisReSelect;
            public Int32Field Stridor;
            public Int32Field OedemaId;
            public Int32Field NicotineStain;
            public Int32Field Asterixis;
            public Int32Field JVPReSelect;
            public Int32Field LymphReSelect;
            public StringField Oedema;
            public Int32Field DehydrationId;
            public Int32Field Clubbing;
            public Int32Field ClubbingReSelect;
            public Int32Field Koilonychia;
            public Int32Field Edema;
            public Int32Field NeckVeins;
            public Int32Field JVP;
            public Int32Field BonyTenderness;
            public Int32Field Leukonychia;
            public Int32Field ThyroidGland;
            public StringField Dehydration;
            public StringField BMI;
            public Int32Field BloodGroupId;
            public Int32Field RegularMedicationId;
            public StringField BloodGroup;
            public StringField RegularMedicationName;
            public StringField Pulse;
            public StringField BP;
            public StringField RespRate;
            public StringField Temperature;
            public Int32Field Appearance;
            public Int32Field BodyBuild;
            public StringField CoOperation;
            public StringField Circumference;
            public Int32Field Decubitus;
            public Int32Field Behaviour;
            public Int32Field SignMeningeal;
            public StringField Nutrition;
            public StringField GEOther;

            public StringField Inspection;
            public StringField Palpation;
            public StringField Percussion;
            public StringField Auscultation;
            public StringField Other;

            public StringField Alimentary;
            public StringField Milestone;
            public Int32Field Muscles;
            //public StringField Pastillness;
            public StringField SocialPersonalHistory;
            public Int32Field Feedinghistory;
            public StringField Travelhistory;
            public Int32Field ConsanguinityId;
            public StringField Consanguinity;
            public StringField Conditions;
            public StringField Respiratory;
            public StringField Cardiovascular;
            public StringField Genitourinary;
            public StringField Locomotor;
            public StringField Haemopoetic;
            public StringField Doctor;
            public StringField SalientFeatures;
            public StringField ProvisionalDiagnosis;
            public StringField FinalDiagnosis;
            public StringField Investigations;
            public StringField Plandischarge;
            public StringField Summary;

            public StringField EmergencyPerson;
            public StringField EmergencyPerAddress;
            public StringField EmergencyPerMobile;

            public Int32Field MajorSurgeryId;
            public StringField AddtoMajorSurgery;
            public StringField MajorSurgery;
            public StringField Socioeconomichistory;
            
            public StringField AgeAtMenarche;
            public StringField AgeAtMenarcheLabel;
            public StringField AgeAtMenarcheLabel1;
            public StringField AgeAtMenarcheLabel2;
            public StringField AgeOfMenopause;
            public StringField AgeOfLastChild;
            public StringField RR;
            public Int32Field MenarcheCycle;
            public BooleanField IsNAD;

            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public Int32Field UpdateUserId;
            public DateTimeField UpdateDate;
            public RowListField<AdmissionCcDetailsRow> DetailList;
            public RowListField<AdmissionPpDetailsRow> PPDetailList;
            public RowListField<DDiagnosisDetailsRow> DiagnosisDetails;

            public Int32Field ScarMark;
            public Int32Field Swelling;
            public Int32Field ShapeChest;
            public Int32Field VisibleVein;
            public Int32Field ApexBeat;
            public Int32Field SupraclavicularIndrawing;
            public Int32Field TrachealTag;
            public Int32Field ICTSitu;
            public Int32Field RadiationMark;

            public Int32Field PositionTrachea;
            public Int32Field PositionApexBeat;
            public Int32Field VocalFremitus;
            public Int32Field ChestExpansibility;


            public Int32Field PercussionNote;
            //public Int32Field Whole;
            //public Int32Field Auscultation { get; set; }

            public Int32Field AddedSound;
            public Int32Field Rhonchi;
            public Int32Field Crepitation;
            public Int32Field Rub;

            public Int32Field Skin;
            public StringField SkinText;
            public StringField PulseRate;
            public Int32Field Rhythm;
            public Int32Field Volume;
            public Int32Field Character;
            public Int32Field RedioFemoralDelay;
            public Int32Field ConditionOf;
            public StringField BloodPressure;
            public Int32Field NeckVenis;
            public Int32Field JVPReSelectCardiovascular;
            public Int32Field Thyroid;

            public Int32Field ScarMarkPrecordium;
            public Int32Field SwellingPrecordium;
            public Int32Field VisibleApexBeatPrecordium;
            public Int32Field VisibleImpulsePrecordium;
        }
    }
}
