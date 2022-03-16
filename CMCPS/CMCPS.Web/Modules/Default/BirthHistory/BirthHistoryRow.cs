
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[BirthHistory]")]
    [DisplayName("Birth History"), InstanceName("Birth History")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]

    [LookupScript("Default.BirthHistory")]
    public sealed class BirthHistoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Birth History Id"), Identity]
        public Int32? BirthHistoryId
        {
            get { return Fields.BirthHistoryId[this]; }
            set { Fields.BirthHistoryId[this] = value; }
        }

        [DisplayName("Birth History"), QuickSearch]
        public String BirthHistory
        {
            get { return Fields.BirthHistory[this]; }
            set { Fields.BirthHistory[this] = value; }
        }

        [DisplayName("Note")]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BirthHistoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BirthHistory; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BirthHistoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BirthHistoryId;
            public StringField BirthHistory;
            public StringField Note;
        }
    }
}
