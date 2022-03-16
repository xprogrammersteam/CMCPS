
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[District]")]
    [DisplayName("District"), InstanceName("District")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.District")]
    public sealed class DistrictRow : Row, IIdRow, INameRow
    {
        [DisplayName("District Id"), Identity]
        public Int32? DistrictId
        {
            get { return Fields.DistrictId[this]; }
            set { Fields.DistrictId[this] = value; }
        }

        [DisplayName("District Name"), NotNull, QuickSearch]
        public String DistrictName
        {
            get { return Fields.DistrictName[this]; }
            set { Fields.DistrictName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DistrictId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DistrictName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DistrictRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DistrictId;
            public StringField DistrictName;
        }
    }
}
