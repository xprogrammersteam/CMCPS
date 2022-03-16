
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Pathology]")]
    [DisplayName("Pathology"), InstanceName("Pathology")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Pathology")]
    public sealed class PathologyRow : Row, IIdRow, INameRow
    {
        [DisplayName("Pathology Id"), Identity]
        public Int32? PathologyId
        {
            get { return Fields.PathologyId[this]; }
            set { Fields.PathologyId[this] = value; }
        }

        [DisplayName("Pathology Name"), QuickSearch]
        public String PathologyName
        {
            get { return Fields.PathologyName[this]; }
            set { Fields.PathologyName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PathologyId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PathologyName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PathologyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PathologyId;
            public StringField PathologyName;
        }
    }
}
