
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Histopathology]")]
    [DisplayName("Histopathology"), InstanceName("Histopathology")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Histopathology")]
    public sealed class HistopathologyRow : Row, IIdRow, INameRow
    {
        [DisplayName("Histopathology Id"), Identity]
        public Int32? HistopathologyId
        {
            get { return Fields.HistopathologyId[this]; }
            set { Fields.HistopathologyId[this] = value; }
        }

        [DisplayName("Histopathology Name"), Size(200), QuickSearch]
        public String HistopathologyName
        {
            get { return Fields.HistopathologyName[this]; }
            set { Fields.HistopathologyName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.HistopathologyId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.HistopathologyName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public HistopathologyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field HistopathologyId;
            public StringField HistopathologyName;
        }
    }
}
