
namespace CMCPS.Default.Entities
{
    using CMCPS.Default.Scripts;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[FollowUp]")]
    [DisplayName("Follow Up"), InstanceName("Follow Up")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class FollowUpRow : Row, IIdRow, INameRow
    {
        [DisplayName("Follow Up Id"), Identity]
        public Int32? FollowUpId
        {
            get { return Fields.FollowUpId[this]; }
            set { Fields.FollowUpId[this] = value; }
        }

        [DisplayName("Name of Patient"), NotNull, ForeignKey("[dbo].[Admission]", "AdmissionId"), LeftJoin("jAdmission")]
        [LookupEditor(typeof(AdmissionRow), FilterField = nameof(AdmissionRow.PatientType), FilterValue = false)]
        public Int32? AdmissionId
        {
            get { return Fields.AdmissionId[this]; }
            set { Fields.AdmissionId[this] = value; }
        }

        [DisplayName("Name of Patient"), Expression("jAdmission.Name")]

        public String PatientName
        {
            get { return Fields.PatientName[this]; }
            set { Fields.PatientName[this] = value; }
        }

        [DisplayName("Age"), Expression("jAdmission.Age")]
        public String Age
        {
            get { return Fields.Age[this]; }
            set { Fields.Age[this] = value; }
        }
        [DisplayName("Weight (kg)"), Expression("jAdmission.Weight")]
        public Int32? Weight
        {
            get { return Fields.Weight[this]; }
            set { Fields.Weight[this] = value; }
        }
        [DisplayName("Blood Group"), NotMapped]
        public String BloodGroup
        {
            get { return Fields.BloodGroup[this]; }
            set { Fields.BloodGroup[this] = value; }
        }

        [DisplayName("Sex"), ForeignKey("[dbo].[Sex]", "SexId"), LeftJoin("jSex"), Expression("jAdmission.SexId")]
        [LookupEditor(typeof(SexRow))]
        public Int32? SexId
        {
            get { return Fields.SexId[this]; }
            set { Fields.SexId[this] = value; }
        }

        [DisplayName("Sex"), Expression("jSex.Sex")]
        public String Sex
        {
            get { return Fields.Sex[this]; }
            set { Fields.Sex[this] = value; }
        }
        [DisplayName("Admission Date"), NotMapped]
        public DateTime? AdmissionDate
        {
            get { return Fields.AdmissionDate[this]; }
            set { Fields.AdmissionDate[this] = value; }
        }
        [DisplayName("PIN Number"), Expression("jAdmission.PinNumber")]
        public String PinNumber
        {
            get { return Fields.PinNumber[this]; }
            set { Fields.PinNumber[this] = value; }
        }
        [DisplayName("Unit Number"), ForeignKey("[dbo].[Unit]", "UnitId"), LeftJoin("jUnit"), Expression("jAdmission.UnitId")]
        [LookupEditor(typeof(UnitRow), InplaceAdd = false)]
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
        [DisplayName("Unit Reg No."), Expression("jAdmission.UnitRegNumber")]
        public String UnitRegNo
        {
            get { return Fields.UnitRegNo[this]; }
            set { Fields.UnitRegNo[this] = value; }
        }
        [DisplayName("Bed Number"), NotMapped]
        public String BedNumber
        {
            get { return Fields.BedNumber[this]; }
            set { Fields.BedNumber[this] = value; }
        }
        [DisplayName("Hospital Reg No"), Expression("jAdmission.HospitalRegNumber")]
        public String HospitalRegNo
        {
            get { return Fields.HospitalRegNo[this]; }
            set { Fields.HospitalRegNo[this] = value; }
        }
        [NotMapped]

        public string AddtoDiagnosis
        {
            get { return Fields.AddtoDiagnosis[this]; }
            set { Fields.AddtoDiagnosis[this] = value; }
        }
        [NotMapped]
        public string AddtoComplaint
        {
            get { return Fields.AddtoComplaint[this]; }
            set { Fields.AddtoComplaint[this] = value; }
        }
        [LookupEditor(typeof(DiagnosisRow), InplaceAdd = true)]
        [DisplayName("Diagnosis"), NotMapped, ForeignKey("[dbo].[Diagnosis]", "DiagnosisId"), LeftJoin("jDiagnosis"), TextualField("DiagnosisName")]
        public Int32? DiagnosisId
        {
            get { return Fields.DiagnosisId[this]; }
            set { Fields.DiagnosisId[this] = value; }
        }

        [DisplayName("Diagnosis"), Expression("jDiagnosis.[DiagnosisName]")]
        public String DiagnosisName
        {
            get { return Fields.DiagnosisName[this]; }
            set { Fields.DiagnosisName[this] = value; }
        }
        [DisplayName(""), QuickSearch]

        public String Diagnosis
        {
            get { return Fields.Diagnosis[this]; }
            set { Fields.Diagnosis[this] = value; }
        }

        [DisplayName("")]
        public String ChiefComplaint
        {
            get { return Fields.ChiefComplaint[this]; }
            set { Fields.ChiefComplaint[this] = value; }
        }
        [LookupEditor(typeof(PresentingComplaintsRow), InplaceAdd = true)]
        [DisplayName("Complaints"), NotMapped, ForeignKey("[dbo].[PresentingComplaints]", "PComplaintsId"), LeftJoin("jPrComplaints"), TextualField("PrComplaintsPComplaints")]
        public Int32? ChiefComplaintId
        {
            get { return Fields.ChiefComplaintId[this]; }
            set { Fields.ChiefComplaintId[this] = value; }
        }
        [DisplayName("Complaints"), Expression("jPrComplaints.[PComplaints]")]
        public String PComplaints
        {
            get { return Fields.PComplaints[this]; }
            set { Fields.PComplaints[this] = value; }
        }
        [DisplayName("Exam")]
        public String Exam
        {
            get { return Fields.Exam[this]; }
            set { Fields.Exam[this] = value; }
        }
        [DisplayName("")]
        public String Doctor
        {
            get { return Fields.Doctor[this]; }
            set { Fields.Doctor[this] = value; }
        }
        [DisplayName("Advice")]
        public String Advice
        {
            get { return Fields.Advice[this]; }
            set { Fields.Advice[this] = value; }
        }

        [DisplayName("Note")]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("Plan")]
        public String Plan
        {
            get { return Fields.Plan[this]; }
            set { Fields.Plan[this] = value; }
        }

        [DisplayName("Date")]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.FollowUpId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PatientName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FollowUpRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FollowUpId;
            public Int32Field AdmissionId;
            public StringField Age;
            public Int32Field UnitId;
            public Int32Field SexId;
            public StringField Sex;
            public StringField PinNumber;
            public StringField UnitNumber;
            public StringField UnitRegNo;
            public StringField BedNumber;
            public StringField HospitalRegNo;
            public Int32Field Weight;
            public StringField BloodGroup;
            public StringField Doctor;
            public StringField AddtoDiagnosis;
            public StringField AddtoComplaint;
            public DateTimeField AdmissionDate;
            public Int32Field ChiefComplaintId;
            public Int32Field DiagnosisId;
            public StringField DiagnosisName;
            public StringField Diagnosis;
            public StringField PComplaints;

            public StringField PatientName;
            public StringField ChiefComplaint;
            public StringField Exam;
            public StringField Advice;
            public StringField Note;
            public StringField Plan;
            public DateTimeField Date;
        }
    }
}
