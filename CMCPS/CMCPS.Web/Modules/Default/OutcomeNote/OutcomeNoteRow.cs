
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[OutcomeNote]")]
    [DisplayName("Outcome Note"), InstanceName("Outcome Note")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.OutcomeNote")]
    public sealed class OutcomeNoteRow : Row, IIdRow, INameRow
    {
        [DisplayName("Outcome Note Id"), Identity]
        public Int32? OutcomeNoteId
        {
            get { return Fields.OutcomeNoteId[this]; }
            set { Fields.OutcomeNoteId[this] = value; }
        }

        [DisplayName("Outcome"), QuickSearch]
        public String Outcome
        {
            get { return Fields.Outcome[this]; }
            set { Fields.Outcome[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OutcomeNoteId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Outcome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OutcomeNoteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OutcomeNoteId;
            public StringField Outcome;
        }
    }
}
