
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Anesthetist]")]
    [DisplayName("Anesthetist"), InstanceName("Anesthetist")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Anesthetist")]
    public sealed class AnesthetistRow : Row, IIdRow, INameRow
    {
        [DisplayName("Anesthetist Id"), Identity]
        public Int32? AnesthetistId
        {
            get { return Fields.AnesthetistId[this]; }
            set { Fields.AnesthetistId[this] = value; }
        }

        [DisplayName("Anesthetist Name"), Size(200), QuickSearch]
        public String AnesthetistName
        {
            get { return Fields.AnesthetistName[this]; }
            set { Fields.AnesthetistName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AnesthetistId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AnesthetistName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AnesthetistRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AnesthetistId;
            public StringField AnesthetistName;
        }
    }
}
