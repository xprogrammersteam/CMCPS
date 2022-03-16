
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Indication]")]
    [DisplayName("Indication"), InstanceName("Indication")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Indication")]
    public sealed class IndicationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Indication Id"), Identity]
        public Int32? IndicationId
        {
            get { return Fields.IndicationId[this]; }
            set { Fields.IndicationId[this] = value; }
        }

        [DisplayName("Indication Name"), Size(200), QuickSearch]
        public String IndicationName
        {
            get { return Fields.IndicationName[this]; }
            set { Fields.IndicationName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IndicationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.IndicationName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public IndicationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IndicationId;
            public StringField IndicationName;
        }
    }
}
