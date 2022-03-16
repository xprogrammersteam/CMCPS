
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Position]")]
    [DisplayName("Position"), InstanceName("Position")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Position")]
    public sealed class PositionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Position Id"), Identity]
        public Int32? PositionId
        {
            get { return Fields.PositionId[this]; }
            set { Fields.PositionId[this] = value; }
        }

        [DisplayName("Position Name"), Size(200), QuickSearch]
        public String PositionName
        {
            get { return Fields.PositionName[this]; }
            set { Fields.PositionName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PositionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PositionName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PositionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PositionId;
            public StringField PositionName;
        }
    }
}
