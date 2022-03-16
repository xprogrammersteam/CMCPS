
namespace CMCPS.Default.Entities
{
    using CMCPS.Modules.Default.Admission;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[AdmissionPPDetails]")]
    [DisplayName("Admission Pp Details"), InstanceName("Admission Pp Details")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AdmissionPpDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("History Id"), Identity]
        public Int32? HistoryId
        {
            get { return Fields.HistoryId[this]; }
            set { Fields.HistoryId[this] = value; }
        }

        [DisplayName("Admission Id"), PrimaryKey, ForeignKey(typeof(AdmissionRow)), LeftJoin("o"), Updatable(false)]
        public Int32? AdmissionId
        {
            get { return Fields.AdmissionId[this]; }
            set { Fields.AdmissionId[this] = value; }
        }

        [DisplayName("Activity"), NotNull, QuickSearch]
        public PPActivity? ActivityId
        {
            get { return (PPActivity?)Fields.ActivityId[this]; }
            set { Fields.ActivityId[this] = (Int32?)value; }
        }

        [DisplayName("Smoking"), NotNull, QuickSearch]
        public String SmokingId
        {
            get { return Fields.SmokingId[this]; }
            set { Fields.SmokingId[this] = value; }
        }

        [DisplayName("Alcoholism"), NotNull, QuickSearch]
        public String AlcoholismId
        {
            get { return Fields.AlcoholismId[this]; }
            set { Fields.AlcoholismId[this] = value; }
        }

        [DisplayName("Drug Addiction"), NotNull, QuickSearch]
        public FamilyHistoryDisease? DrugAddictionId
        {
            get { return (FamilyHistoryDisease?)Fields.DrugAddictionId[this]; }
            set { Fields.DrugAddictionId[this] = (Int32?)value; }
        }

        [DisplayName("Exposure History"), NotNull, QuickSearch]
        public FamilyHistoryDisease? ExposureHistoryId
        {
            get { return (FamilyHistoryDisease?)Fields.ExposureHistoryId[this]; }
            set { Fields.ExposureHistoryId[this] = (Int32?)value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.HistoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SmokingId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AdmissionPpDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field HistoryId;
            public Int32Field AdmissionId;
            public Int32Field ActivityId;
            public StringField SmokingId;
            public StringField AlcoholismId;
            public Int32Field DrugAddictionId;
            public Int32Field ExposureHistoryId;
        }
    }
}
