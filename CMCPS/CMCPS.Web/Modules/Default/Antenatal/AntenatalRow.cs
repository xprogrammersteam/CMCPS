
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Antenatal]")]
    [DisplayName("Antenatal"), InstanceName("Antenatal")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Antenatal")]
    public sealed class AntenatalRow : Row, IIdRow, INameRow
    {
        [DisplayName("Antenatal Id"), Identity]
        public Int32? AntenatalId
        {
            get { return Fields.AntenatalId[this]; }
            set { Fields.AntenatalId[this] = value; }
        }

        [DisplayName("Antenatal Name"), Column("Antenatal_Name"), Size(100), QuickSearch]
        public String AntenatalName
        {
            get { return Fields.AntenatalName[this]; }
            set { Fields.AntenatalName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AntenatalId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AntenatalName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AntenatalRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AntenatalId;
            public StringField AntenatalName;
        }
    }
}
