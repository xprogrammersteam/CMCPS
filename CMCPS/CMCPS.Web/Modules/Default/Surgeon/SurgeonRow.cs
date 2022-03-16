
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Surgeon]")]
    [DisplayName("Surgeon"), InstanceName("Surgeon")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Surgeon")]
    public sealed class SurgeonRow : Row, IIdRow, INameRow
    {
        [DisplayName("Surgeon Id"), Identity]
        public Int32? SurgeonId
        {
            get { return Fields.SurgeonId[this]; }
            set { Fields.SurgeonId[this] = value; }
        }

        [DisplayName("Surgeon Name"), Size(200), QuickSearch]
        public String SurgeonName
        {
            get { return Fields.SurgeonName[this]; }
            set { Fields.SurgeonName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SurgeonId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SurgeonName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SurgeonRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SurgeonId;
            public StringField SurgeonName;
        }
    }
}
