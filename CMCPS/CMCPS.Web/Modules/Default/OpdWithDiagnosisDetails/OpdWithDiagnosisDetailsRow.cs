
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[OpdWithDiagnosisDetails]")]
    [DisplayName("Opd With Diagnosis Details"), InstanceName("Opd With Diagnosis Details")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class OpdWithDiagnosisDetailsRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Opd"), ForeignKey("[dbo].[OPD]", "OpdID"), LeftJoin("jOpd"), TextualField("OpdName")]
        public Int32? OpdId
        {
            get { return Fields.OpdId[this]; }
            set { Fields.OpdId[this] = value; }
        }

        //[DisplayName("Diagnosis"), ForeignKey("[dbo].[Diagnosis]", "DiagnosisId"), LeftJoin("jDiagnosis"), TextualField("DiagnosisDiagnosisName")]
        //public Int32? DiagnosisId
        //{
        //    get { return Fields.DiagnosisId[this]; }
        //    set { Fields.DiagnosisId[this] = value; }
        //}

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
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OpdWithDiagnosisDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field OpdId;
            public Int32Field DiagnosisId;

            public StringField Diagnosis;
            
        }
    }
}
