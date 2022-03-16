
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[PresentingComplaints]")]
    [DisplayName("Presenting Complaints"), InstanceName("Presenting Complaints")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]

    [LookupScript("Default.PresentingComplaints")]
    public sealed class PresentingComplaintsRow : Row, IIdRow, INameRow
    {
        [DisplayName("P Complaints Id"), Identity]
        public Int32? PComplaintsId
        {
            get { return Fields.PComplaintsId[this]; }
            set { Fields.PComplaintsId[this] = value; }
        }

        [DisplayName("P Complaints"), QuickSearch]
        public String PComplaints
        {
            get { return Fields.PComplaints[this]; }
            set { Fields.PComplaints[this] = value; }
        }

        [DisplayName("Note")]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PComplaintsId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PComplaints; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PresentingComplaintsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PComplaintsId;
            public StringField PComplaints;
            public StringField Note;
        }
    }
}
