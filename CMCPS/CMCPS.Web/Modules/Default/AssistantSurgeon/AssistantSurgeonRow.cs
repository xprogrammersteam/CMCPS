
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[AssistantSurgeon]")]
    [DisplayName("Assistant Surgeon"), InstanceName("Assistant Surgeon")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.AssistantSurgeon")]
    public sealed class AssistantSurgeonRow : Row, IIdRow, INameRow
    {
        [DisplayName("Assistant Surgeon Id"), Identity]
        public Int32? AssistantSurgeonId
        {
            get { return Fields.AssistantSurgeonId[this]; }
            set { Fields.AssistantSurgeonId[this] = value; }
        }

        [DisplayName("Assistant Surgeon Name"), Size(200), QuickSearch]
        public String AssistantSurgeonName
        {
            get { return Fields.AssistantSurgeonName[this]; }
            set { Fields.AssistantSurgeonName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AssistantSurgeonId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AssistantSurgeonName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AssistantSurgeonRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AssistantSurgeonId;
            public StringField AssistantSurgeonName;
        }
    }
}
