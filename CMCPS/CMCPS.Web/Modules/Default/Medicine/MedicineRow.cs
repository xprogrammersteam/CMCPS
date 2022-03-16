
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Medicine]")]
    [DisplayName("Medicine"), InstanceName("Medicine")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Medicine")]
    public sealed class MedicineRow : Row, IIdRow, INameRow
    {
        [DisplayName("Medicine Id"), Identity]
        public Int32? MedicineId
        {
            get { return Fields.MedicineId[this]; }
            set { Fields.MedicineId[this] = value; }
        }

        [DisplayName("Medicine Name"), Size(500), QuickSearch]
        public String MedicineName
        {
            get { return Fields.MedicineName[this]; }
            set { Fields.MedicineName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MedicineId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MedicineName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MedicineRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MedicineId;
            public StringField MedicineName;
        }
    }
}
