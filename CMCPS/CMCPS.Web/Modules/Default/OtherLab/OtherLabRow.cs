
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[OtherLab]")]
    [DisplayName("Other Lab"), InstanceName("Other Lab")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.OtherLab")]
    public sealed class OtherLabRow : Row, IIdRow, INameRow
    {
        [DisplayName("Lab Id"), Identity]
        public Int32? LabId
        {
            get { return Fields.LabId[this]; }
            set { Fields.LabId[this] = value; }
        }

        [DisplayName("Name"), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.LabId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OtherLabRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field LabId;
            public StringField Name;
        }
    }
}
