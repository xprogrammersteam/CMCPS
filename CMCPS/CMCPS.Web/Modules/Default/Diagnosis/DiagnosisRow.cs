
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Diagnosis]")]
    [DisplayName("Diagnosis"), InstanceName("Diagnosis")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]

    [LookupScript("Default.Diagnosis")]
    public sealed class DiagnosisRow : Row, IIdRow, INameRow
    {
        [DisplayName("Diagnosis Id"), Identity]
        public Int32? DiagnosisId
        {
            get { return Fields.DiagnosisId[this]; }
            set { Fields.DiagnosisId[this] = value; }
        }

        [DisplayName("Diagnosis Name"), QuickSearch]
        public String DiagnosisName
        {
            get { return Fields.DiagnosisName[this]; }
            set { Fields.DiagnosisName[this] = value; }
        }

        [DisplayName("Note")]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DiagnosisId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DiagnosisName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DiagnosisRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DiagnosisId;
            public StringField DiagnosisName;
            public StringField Note;
        }
    }
}
