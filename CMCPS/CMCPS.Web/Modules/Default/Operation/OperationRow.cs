
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Operation]")]
    [DisplayName("Operation"), InstanceName("Operation")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Operation")]
    public sealed class OperationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Operation Id"), Identity]
        public Int32? OperationId
        {
            get { return Fields.OperationId[this]; }
            set { Fields.OperationId[this] = value; }
        }

        [DisplayName("Operation Name"), Size(500), QuickSearch]
        public String OperationName
        {
            get { return Fields.OperationName[this]; }
            set { Fields.OperationName[this] = value; }
        }

        [DisplayName("Findings")]
        public String Findings
        {
            get { return Fields.Findings[this]; }
            set { Fields.Findings[this] = value; }
        }

        [DisplayName("Procedures")]
        public String Procedures
        {
            get { return Fields.Procedures[this]; }
            set { Fields.Procedures[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OperationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OperationName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OperationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OperationId;
            public StringField OperationName;
            public StringField Findings;
            public StringField Procedures;
        }
    }
}
