namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Immunization]")]
    [DisplayName("Immunization"), InstanceName("Immunization")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Immunization")]
    public sealed class ImmunizationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Immunization Id"), Identity]
        public Int32? ImmunizationId
        {
            get { return Fields.ImmunizationId[this]; }
            set { Fields.ImmunizationId[this] = value; }
        }

        [DisplayName("Immunization Name"), Size(100), QuickSearch]
        public String ImmunizationName
        {
            get { return Fields.ImmunizationName[this]; }
            set { Fields.ImmunizationName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ImmunizationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ImmunizationName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ImmunizationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ImmunizationId;
            public StringField ImmunizationName;
        }
    }
}
