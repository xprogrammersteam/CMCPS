
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[SpecialNote]")]
    [DisplayName("Special Note"), InstanceName("Special Note")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.SpecialNote")]
    public sealed class SpecialNoteRow : Row, IIdRow, INameRow
    {
        [DisplayName("Special Note Id"), Identity]
        public Int32? SpecialNoteId
        {
            get { return Fields.SpecialNoteId[this]; }
            set { Fields.SpecialNoteId[this] = value; }
        }

        [DisplayName("Special Note Name"), Size(200), QuickSearch]
        public String SpecialNoteName
        {
            get { return Fields.SpecialNoteName[this]; }
            set { Fields.SpecialNoteName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SpecialNoteId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SpecialNoteName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SpecialNoteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SpecialNoteId;
            public StringField SpecialNoteName;
        }
    }
}
