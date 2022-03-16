
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[ComplicationNote]")]
    [DisplayName("Complication Note"), InstanceName("Complication Note")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.ComplicationNote")]
    public sealed class ComplicationNoteRow : Row, IIdRow, INameRow
    {
        [DisplayName("Complication Note Id"),Identity]
        public Int32? ComplicationNoteId
        {
            get { return Fields.ComplicationNoteId[this]; }
            set { Fields.ComplicationNoteId[this] = value; }
        }

        [DisplayName("Complication Note"), QuickSearch]
        public String ComplicationNote
        {
            get { return Fields.ComplicationNote[this]; }
            set { Fields.ComplicationNote[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ComplicationNoteId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ComplicationNote; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ComplicationNoteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ComplicationNoteId;
            public StringField ComplicationNote;
        }
    }
}
