
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[PatientType]")]
    [DisplayName("Patient Type"), InstanceName("Patient Type")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.PatientType")]
    public sealed class PatientTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Patient Type Id"), Identity]
        public Int32? PatientTypeId
        {
            get { return Fields.PatientTypeId[this]; }
            set { Fields.PatientTypeId[this] = value; }
        }

        [DisplayName("Patient Type"), Size(50), QuickSearch]
        public String PatientType
        {
            get { return Fields.PatientType[this]; }
            set { Fields.PatientType[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PatientTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PatientType; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PatientTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PatientTypeId;
            public StringField PatientType;
        }
    }
}
