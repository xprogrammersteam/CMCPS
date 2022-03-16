
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Upazila]")]
    [DisplayName("Upazila"), InstanceName("Upazila")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Upazila")]
    public sealed class UpazilaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Upazila Id"), Identity]
        public Int32? UpazilaId
        {
            get { return Fields.UpazilaId[this]; }
            set { Fields.UpazilaId[this] = value; }
        }

        [DisplayName("District Name"), NotNull, ForeignKey("[dbo].[District]", "DistrictId"), LeftJoin("jDistrict"), LookupInclude]
        //[DisplayName("District Name"), NotNull, ForeignKey("[dbo].[District]", "DistrictId"), LookupInclude]
        [LookupEditor(typeof(DistrictRow), InplaceAdd = true)]
        public Int32? DistrictId
        {
            get { return Fields.DistrictId[this]; }
            set { Fields.DistrictId[this] = value; }
        }

        [DisplayName("District Name"), Expression("jDistrict.DistrictName")]
        //[DisplayName("District Name"), Size(50), NotNull, QuickSearch]
        public String DistrictName
        {
            get { return Fields.DistrictName[this]; }
            set { Fields.DistrictName[this] = value; }
        }
       
        [DisplayName("Upazila Name"), NotNull, Size(100), QuickSearch]
        public String UpazilaName
        {
            get { return Fields.UpazilaName[this]; }
            set { Fields.UpazilaName[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.UpazilaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.UpazilaName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UpazilaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UpazilaId;
            public Int32Field DistrictId;
            public StringField UpazilaName;

            public StringField DistrictName;
        }
    }
}
