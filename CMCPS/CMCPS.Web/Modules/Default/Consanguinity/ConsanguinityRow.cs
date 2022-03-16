
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Consanguinity]")]
    [DisplayName("Consanguinity"), InstanceName("Consanguinity")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Consanguinity")]
    public sealed class ConsanguinityRow : Row, IIdRow, INameRow
    {
        [DisplayName("Consanguinity Id"), Identity]
        public Int32? ConsanguinityId
        {
            get { return Fields.ConsanguinityId[this]; }
            set { Fields.ConsanguinityId[this] = value; }
        }

        [DisplayName("Consanguinity"), Size(50), QuickSearch]
        public String Consanguinity
        {
            get { return Fields.Consanguinity[this]; }
            set { Fields.Consanguinity[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ConsanguinityId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Consanguinity; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ConsanguinityRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ConsanguinityId;
            public StringField Consanguinity;
        }
    }
}
