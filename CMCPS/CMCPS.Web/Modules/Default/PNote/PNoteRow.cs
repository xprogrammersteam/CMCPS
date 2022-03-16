
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[PNote]")]
    [DisplayName("P Note"), InstanceName("P Note")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.PNote")]
    public sealed class PNoteRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"),Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Note Name"), Size(500), QuickSearch]
        public String NoteName
        {
            get { return Fields.NoteName[this]; }
            set { Fields.NoteName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NoteName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PNoteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField NoteName;
        }
    }
}
