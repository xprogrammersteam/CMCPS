
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[FamilyHistory]")]
    [DisplayName("Family History"), InstanceName("Family History")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]

    [LookupScript("Default.FamilyHistory")]
    public sealed class FamilyHistoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Family History Id"), Identity]
        public Int32? FamilyHistoryId
        {
            get { return Fields.FamilyHistoryId[this]; }
            set { Fields.FamilyHistoryId[this] = value; }
        }

        [DisplayName("Family History"), QuickSearch]
        public String FamilyHistory
        {
            get { return Fields.FamilyHistory[this]; }
            set { Fields.FamilyHistory[this] = value; }
        }

        [DisplayName("Note")]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.FamilyHistoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FamilyHistory; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FamilyHistoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FamilyHistoryId;
            public StringField FamilyHistory;
            public StringField Note;
        }
    }
}
