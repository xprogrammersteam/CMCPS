
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Natal]")]
    [DisplayName("Natal"), InstanceName("Natal")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Natal")]
    public sealed class NatalRow : Row, IIdRow, INameRow
    {
        [DisplayName("Natal Id"), Identity]
        public Int32? NatalId
        {
            get { return Fields.NatalId[this]; }
            set { Fields.NatalId[this] = value; }
        }

        [DisplayName("Natal Name"), Size(100), QuickSearch]
        public String NatalName
        {
            get { return Fields.NatalName[this]; }
            set { Fields.NatalName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.NatalId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NatalName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NatalRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field NatalId;
            public StringField NatalName;
        }
    }
}
