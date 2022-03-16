
namespace CMCPS.Modules.Common.Reporting
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Common"), TableName("[dbo].[ReportHeading]")]
    [DisplayName("Report Heading"), InstanceName("Report Heading")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Common.Reporting")]
    public sealed class ReportHeadingRow : Row, IIdRow, INameRow
    {
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        public String CompanyName
        {
            get { return Fields.CompanyName[this]; }
            set { Fields.CompanyName[this] = value; }
        }

        public String Department
        {
            get { return Fields.Department[this]; }
            set { Fields.Department[this] = value; }
        }

        public String LogoLeft
        {
            get { return Fields.LogoLeft[this]; }
            set { Fields.LogoLeft[this] = value; }
        }

        public String LogoRight
        {
            get { return Fields.LogoRight[this]; }
            set { Fields.LogoRight[this] = value; }
        }

        public static readonly RowFields Fields = new RowFields().Init();
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField CompanyName;
            public StringField Department;
            public StringField LogoLeft;
            public StringField LogoRight;

        }

        public ReportHeadingRow() : base(Fields)
        {

        }


        public IIdField IdField
        {
            get { return Fields.Id; }
        }

        public StringField NameField
        {
            get { return Fields.CompanyName; }
        }
    }
}