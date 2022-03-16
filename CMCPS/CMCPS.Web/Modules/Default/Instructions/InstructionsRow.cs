
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Instructions]")]
    [DisplayName("Instructions"), InstanceName("Instructions")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Instructions")]
    public sealed class InstructionsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Instructions Id"), Identity]
        public Int32? InstructionsId
        {
            get { return Fields.InstructionsId[this]; }
            set { Fields.InstructionsId[this] = value; }
        }

        [DisplayName("Instructions Name"), Size(200), QuickSearch]
        public String InstructionsName
        {
            get { return Fields.InstructionsName[this]; }
            set { Fields.InstructionsName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.InstructionsId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.InstructionsName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InstructionsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field InstructionsId;
            public StringField InstructionsName;
        }
    }
}
