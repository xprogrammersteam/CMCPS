
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[D_DiagnosisDetails]")]
    [DisplayName("Diagnosis Details"), InstanceName("Diagnosis Details")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DDiagnosisDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("D Id"), Column("D_Id"), Identity]
        public Int32? DId
        {
            get { return Fields.DId[this]; }
            set { Fields.DId[this] = value; }
        }
        [DisplayName("Admission"), PrimaryKey, ForeignKey(typeof(AdmissionRow)), LeftJoin("o"), Updatable(false)]
        //[DisplayName("Admission"), Column("AdmissionID"), ForeignKey("[dbo].[Admission]", "AdmissionId"), LeftJoin("jAdmission"), TextualField("AdmissionName")]
        public Int32? AdmissionId
        {
            get { return Fields.AdmissionId[this]; }
            set { Fields.AdmissionId[this] = value; }
        }
        [LookupEditor(typeof(DiagnosisRow), InplaceAdd = true)]
        [DisplayName("Diagnosis"), NotNull, ForeignKey("[dbo].[Diagnosis]", "DiagnosisId"), LeftJoin("jDiagnosis"), TextualField("DiagnosisName")]
        public Int32? DiagnosisId
        {
            get { return Fields.DiagnosisId[this]; }
            set { Fields.DiagnosisId[this] = value; }
        }

        [DisplayName("Diagnosis"), Expression("jDiagnosis.[DiagnosisName]")]
        public String Diagnosis
        {
            get { return Fields.Diagnosis[this]; }
            set { Fields.Diagnosis[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.DId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Diagnosis; }
        }

        public static readonly RowFields Fields = new RowFields().Init();


        public DDiagnosisDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DId;
            public Int32Field AdmissionId;
            public Int32Field DiagnosisId;
            public StringField Diagnosis;

        }
    }
}
