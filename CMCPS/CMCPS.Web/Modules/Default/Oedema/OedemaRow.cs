
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Oedema]")]
    [DisplayName("Oedema"), InstanceName("Oedema")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Oedema")]
    public sealed class OedemaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Oedema Id"), Identity]
        public Int32? OedemaId
        {
            get { return Fields.OedemaId[this]; }
            set { Fields.OedemaId[this] = value; }
        }

        [DisplayName("Oedema"), Size(50), QuickSearch]
        public String Oedema
        {
            get { return Fields.Oedema[this]; }
            set { Fields.Oedema[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OedemaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Oedema; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OedemaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OedemaId;
            public StringField Oedema;
        }
    }
}
