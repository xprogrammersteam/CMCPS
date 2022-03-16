
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Percussion]")]
    [DisplayName("Percussion"), InstanceName("Percussion")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Percussion")]
    public sealed class PercussionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Percussion Id"), Identity]
        public Int32? PercussionId
        {
            get { return Fields.PercussionId[this]; }
            set { Fields.PercussionId[this] = value; }
        }

        [DisplayName("Percussion Name"), Size(100), QuickSearch]
        public String PercussionName
        {
            get { return Fields.PercussionName[this]; }
            set { Fields.PercussionName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PercussionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PercussionName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PercussionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PercussionId;
            public StringField PercussionName;
        }
    }
}
