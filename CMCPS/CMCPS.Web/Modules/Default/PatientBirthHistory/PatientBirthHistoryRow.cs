
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[PatientBirthHistory]")]
    [DisplayName("Patient Birth History"), InstanceName("Patient Birth History")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PatientBirthHistoryRow : Row, IIdRow
    {
        [DisplayName("Pb History Id"), Column("PBHistoryId"), Identity]
        public Int32? PbHistoryId
        {
            get { return Fields.PbHistoryId[this]; }
            set { Fields.PbHistoryId[this] = value; }
        }

        [DisplayName("Admission"), NotNull, ForeignKey("[dbo].[Admission]", "AdmissionId"), LeftJoin("jAdmission"), TextualField("AdmissionHistoryOfPresentIllness")]
        public Int32? AdmissionId
        {
            get { return Fields.AdmissionId[this]; }
            set { Fields.AdmissionId[this] = value; }
        }

        [DisplayName("Birth History"), NotNull, ForeignKey("[dbo].[BirthHistory]", "BirthHistoryId"), LeftJoin("jBirthHistory"), TextualField("BirthHistory")]
        public Int32? BirthHistoryId
        {
            get { return Fields.BirthHistoryId[this]; }
            set { Fields.BirthHistoryId[this] = value; }
        }

        [DisplayName("Admission Date"), Expression("jAdmission.[Date]")]
        public DateTime? AdmissionDate
        {
            get { return Fields.AdmissionDate[this]; }
            set { Fields.AdmissionDate[this] = value; }
        }

        [DisplayName("Admission Time"), Expression("jAdmission.[Time]")]
        public TimeSpan? AdmissionTime
        {
            get { return Fields.AdmissionTime[this]; }
            set { Fields.AdmissionTime[this] = value; }
        }

        [DisplayName("Admission Bed Id"), Expression("jAdmission.[BedId]")]
        public Int32? AdmissionBedId
        {
            get { return Fields.AdmissionBedId[this]; }
            set { Fields.AdmissionBedId[this] = value; }
        }

        [DisplayName("Admission P Complaints Id"), Expression("jAdmission.[PComplaintsId]")]
        public Int32? AdmissionPComplaintsId
        {
            get { return Fields.AdmissionPComplaintsId[this]; }
            set { Fields.AdmissionPComplaintsId[this] = value; }
        }

        [DisplayName("Admission History Of Present Illness"), Expression("jAdmission.[HistoryOfPresentIllness]")]
        public String AdmissionHistoryOfPresentIllness
        {
            get { return Fields.AdmissionHistoryOfPresentIllness[this]; }
            set { Fields.AdmissionHistoryOfPresentIllness[this] = value; }
        }

        [DisplayName("Admission Ho Past Illness"), Expression("jAdmission.[HOPastIllness]")]
        public String AdmissionHoPastIllness
        {
            get { return Fields.AdmissionHoPastIllness[this]; }
            set { Fields.AdmissionHoPastIllness[this] = value; }
        }

        [DisplayName("Admission Drug History"), Expression("jAdmission.[DrugHistory]")]
        public String AdmissionDrugHistory
        {
            get { return Fields.AdmissionDrugHistory[this]; }
            set { Fields.AdmissionDrugHistory[this] = value; }
        }

        [DisplayName("Admission Family History Id"), Expression("jAdmission.[FamilyHistoryId]")]
        public Int32? AdmissionFamilyHistoryId
        {
            get { return Fields.AdmissionFamilyHistoryId[this]; }
            set { Fields.AdmissionFamilyHistoryId[this] = value; }
        }

        [DisplayName("Admission Immunization"), Expression("jAdmission.[Immunization]")]
        public Boolean? AdmissionImmunization
        {
            get { return Fields.AdmissionImmunization[this]; }
            set { Fields.AdmissionImmunization[this] = value; }
        }

        [DisplayName("Admission Insert User Id"), Expression("jAdmission.[InsertUserId]")]
        public Int32? AdmissionInsertUserId
        {
            get { return Fields.AdmissionInsertUserId[this]; }
            set { Fields.AdmissionInsertUserId[this] = value; }
        }

        [DisplayName("Admission Insert Date"), Expression("jAdmission.[InsertDate]")]
        public DateTime? AdmissionInsertDate
        {
            get { return Fields.AdmissionInsertDate[this]; }
            set { Fields.AdmissionInsertDate[this] = value; }
        }

        [DisplayName("Admission Update User Id"), Expression("jAdmission.[UpdateUserId]")]
        public Int32? AdmissionUpdateUserId
        {
            get { return Fields.AdmissionUpdateUserId[this]; }
            set { Fields.AdmissionUpdateUserId[this] = value; }
        }

        [DisplayName("Admission Update Date"), Expression("jAdmission.[UpdateDate]")]
        public DateTime? AdmissionUpdateDate
        {
            get { return Fields.AdmissionUpdateDate[this]; }
            set { Fields.AdmissionUpdateDate[this] = value; }
        }

        [DisplayName("Birth History"), Expression("jBirthHistory.[BirthHistory]")]
        public String BirthHistory
        {
            get { return Fields.BirthHistory[this]; }
            set { Fields.BirthHistory[this] = value; }
        }

        [DisplayName("Birth History Note"), Expression("jBirthHistory.[Note]")]
        public String BirthHistoryNote
        {
            get { return Fields.BirthHistoryNote[this]; }
            set { Fields.BirthHistoryNote[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PbHistoryId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PatientBirthHistoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PbHistoryId;
            public Int32Field AdmissionId;
            public Int32Field BirthHistoryId;

            public DateTimeField AdmissionDate;
            public TimeSpanField AdmissionTime;
            public Int32Field AdmissionBedId;
            public Int32Field AdmissionPComplaintsId;
            public StringField AdmissionHistoryOfPresentIllness;
            public StringField AdmissionHoPastIllness;
            public StringField AdmissionDrugHistory;
            public Int32Field AdmissionFamilyHistoryId;
            public BooleanField AdmissionImmunization;
            public Int32Field AdmissionInsertUserId;
            public DateTimeField AdmissionInsertDate;
            public Int32Field AdmissionUpdateUserId;
            public DateTimeField AdmissionUpdateDate;

            public StringField BirthHistory;
            public StringField BirthHistoryNote;
        }
    }
}
