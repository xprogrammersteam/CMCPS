
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[MajorSurgery]")]
    [DisplayName("Major Surgery"), InstanceName("Major Surgery")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.MajorSurgery")]
    public sealed class MajorSurgeryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Major Surgery Id"), Identity]
        public Int32? MajorSurgeryId
        {
            get { return Fields.MajorSurgeryId[this]; }
            set { Fields.MajorSurgeryId[this] = value; }
        }

        [DisplayName("Major Surgery Name"), Size(200), QuickSearch]
        public String MajorSurgeryName
        {
            get { return Fields.MajorSurgeryName[this]; }
            set { Fields.MajorSurgeryName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MajorSurgeryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MajorSurgeryName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MajorSurgeryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MajorSurgeryId;
            public StringField MajorSurgeryName;
        }
    }
}
