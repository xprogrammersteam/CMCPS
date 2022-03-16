
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[OTAttendant]")]
    [DisplayName("Ot Attendant"), InstanceName("Ot Attendant")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.OtAttendant")]
    public sealed class OtAttendantRow : Row, IIdRow, INameRow
    {
        [DisplayName("Ot Attendant Id"), Column("OTAttendantId"), Identity]
        public Int32? OtAttendantId
        {
            get { return Fields.OtAttendantId[this]; }
            set { Fields.OtAttendantId[this] = value; }
        }

        [DisplayName("Ot Attendant Name"), Column("OTAttendantName"), Size(200), QuickSearch]
        public String OtAttendantName
        {
            get { return Fields.OtAttendantName[this]; }
            set { Fields.OtAttendantName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OtAttendantId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OtAttendantName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OtAttendantRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OtAttendantId;
            public StringField OtAttendantName;
        }
    }
}
