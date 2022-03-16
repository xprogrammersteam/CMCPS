
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[IllNess]")]
    [DisplayName("IllNess"), InstanceName("IllNess")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.IllNess")]
    public sealed class IllNessRow : Row, IIdRow, INameRow
    {
        [DisplayName("Illness Id"), Identity]
        public Int32? IllnessId
        {
            get { return Fields.IllnessId[this]; }
            set { Fields.IllnessId[this] = value; }
        }

        [DisplayName("Illness Name"), Size(100), QuickSearch]
        public String IllnessName
        {
            get { return Fields.IllnessName[this]; }
            set { Fields.IllnessName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IllnessId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.IllnessName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public IllNessRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IllnessId;
            public StringField IllnessName;
        }
    }
}
