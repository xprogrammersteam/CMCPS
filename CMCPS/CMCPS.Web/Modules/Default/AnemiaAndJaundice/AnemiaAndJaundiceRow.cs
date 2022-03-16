
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[AnemiaAndJaundice]")]
    [DisplayName("Anemia And Jaundice"), InstanceName("Anemia And Jaundice")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.AnemiaAndJaundice")]
    public sealed class AnemiaAndJaundiceRow : Row, IIdRow, INameRow
    {
        [DisplayName("Anemia And Jaundice Id"), Identity]
        public Int32? AnemiaAndJaundiceId
        {
            get { return Fields.AnemiaAndJaundiceId[this]; }
            set { Fields.AnemiaAndJaundiceId[this] = value; }
        }

        [DisplayName("Name"), Size(50), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AnemiaAndJaundiceId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AnemiaAndJaundiceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AnemiaAndJaundiceId;
            public StringField Name;
        }
    }
}
