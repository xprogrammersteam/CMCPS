
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Bed]")]
    [DisplayName("Bed"), InstanceName("Bed")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Bed")]
    public sealed class BedRow : Row, IIdRow, INameRow
    {
        [DisplayName("Bed Id"), Identity]
        public Int32? BedId
        {
            get { return Fields.BedId[this]; }
            set { Fields.BedId[this] = value; }
        }

        [DisplayName("Bed Number"), QuickSearch]
        public String BedNumber
        {
            get { return Fields.BedNumber[this]; }
            set { Fields.BedNumber[this] = value; }
        }

        [DisplayName("Note")]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BedId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BedNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BedRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BedId;
            public StringField BedNumber;
            public StringField Note;
        }
    }
}
