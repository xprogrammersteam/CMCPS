
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[OTSister]")]
    [DisplayName("Ot Sister"), InstanceName("Ot Sister")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.OTSister")]
    public sealed class OtSisterRow : Row, IIdRow, INameRow
    {
        [DisplayName("Ot Sister Id"), Column("OTSisterId"), Identity]
        public Int32? OtSisterId
        {
            get { return Fields.OtSisterId[this]; }
            set { Fields.OtSisterId[this] = value; }
        }

        [DisplayName("Ot Sister Name"), Column("OTSisterName"), Size(200), QuickSearch]
        public String OtSisterName
        {
            get { return Fields.OtSisterName[this]; }
            set { Fields.OtSisterName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OtSisterId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OtSisterName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OtSisterRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OtSisterId;
            public StringField OtSisterName;
        }
    }
}
