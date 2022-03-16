
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Anesthesia]")]
    [DisplayName("Anesthesia"), InstanceName("Anesthesia")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Anesthesia")]
    public sealed class AnesthesiaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Anesthesia Id"), Identity]
        public Int32? AnesthesiaId
        {
            get { return Fields.AnesthesiaId[this]; }
            set { Fields.AnesthesiaId[this] = value; }
        }

        [DisplayName("Anesthesia Name"), Size(500), QuickSearch]
        public String AnesthesiaName
        {
            get { return Fields.AnesthesiaName[this]; }
            set { Fields.AnesthesiaName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AnesthesiaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AnesthesiaName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AnesthesiaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AnesthesiaId;
            public StringField AnesthesiaName;
        }
    }
}
