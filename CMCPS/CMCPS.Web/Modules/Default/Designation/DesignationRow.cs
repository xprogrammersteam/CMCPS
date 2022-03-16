
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Designation]")]
    [DisplayName("Designation"), InstanceName("Designation")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Designation")]
    public sealed class DesignationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Designation Id"), Identity]
        public Int32? DesignationId
        {
            get { return Fields.DesignationId[this]; }
            set { Fields.DesignationId[this] = value; }
        }

        [DisplayName("Designation Name"), Size(500), QuickSearch]
        public String DesignationName
        {
            get { return Fields.DesignationName[this]; }
            set { Fields.DesignationName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DesignationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DesignationName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DesignationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DesignationId;
            public StringField DesignationName;
        }
    }
}
