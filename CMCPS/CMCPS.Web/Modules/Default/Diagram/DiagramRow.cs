
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Diagram]")]
    [DisplayName("Diagram"), InstanceName("Diagram")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Diagram")]
    public sealed class DiagramRow : Row, IIdRow, INameRow
    {
        [DisplayName("Diagram Id"), Identity]
        public Int32? DiagramId
        {
            get { return Fields.DiagramId[this]; }
            set { Fields.DiagramId[this] = value; }
        }

        [DisplayName("Diagram Name"), Size(200), QuickSearch]
        public String DiagramName
        {
            get { return Fields.DiagramName[this]; }
            set { Fields.DiagramName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DiagramId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DiagramName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DiagramRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DiagramId;
            public StringField DiagramName;
        }
    }
}
