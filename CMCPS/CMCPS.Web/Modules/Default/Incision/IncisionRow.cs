
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Incision]")]
    [DisplayName("Incision"), InstanceName("Incision")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Incision")]
    public sealed class IncisionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Incision Id"), Identity]
        public Int32? IncisionId
        {
            get { return Fields.IncisionId[this]; }
            set { Fields.IncisionId[this] = value; }
        }

        [DisplayName("Incision Name"), Size(200), QuickSearch]
        public String IncisionName
        {
            get { return Fields.IncisionName[this]; }
            set { Fields.IncisionName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IncisionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.IncisionName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public IncisionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IncisionId;
            public StringField IncisionName;
        }
    }
}
