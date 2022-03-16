
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[RegularMedication]")]
    [DisplayName("Regular Medication"), InstanceName("Regular Medication")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.RegularMedication")]
    public sealed class RegularMedicationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Regular Medication Id"), Identity]
        public Int32? RegularMedicationId
        {
            get { return Fields.RegularMedicationId[this]; }
            set { Fields.RegularMedicationId[this] = value; }
        }

        [DisplayName("Regular Medication Name"), Size(50), QuickSearch]
        public String RegularMedicationName
        {
            get { return Fields.RegularMedicationName[this]; }
            set { Fields.RegularMedicationName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RegularMedicationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.RegularMedicationName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RegularMedicationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RegularMedicationId;
            public StringField RegularMedicationName;
        }
    }
}
