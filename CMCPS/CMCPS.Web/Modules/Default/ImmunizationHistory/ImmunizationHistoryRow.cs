
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[ImmunizationHistory]")]
    [DisplayName("Immunization History"), InstanceName("Immunization History")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.ImmunizationHistory")]
    public sealed class ImmunizationHistoryRow : Row, IIdRow
    {
        [DisplayName("Immunization History Id"), Identity]
        public Int32? ImmunizationHistoryId
        {
            get { return Fields.ImmunizationHistoryId[this]; }
            set { Fields.ImmunizationHistoryId[this] = value; }
        }

        [DisplayName("Admission Id"), NotNull]
        public Int32? AdmissionId
        {
            get { return Fields.AdmissionId[this]; }
            set { Fields.AdmissionId[this] = value; }
        }

        [DisplayName("Immunization Id"), NotNull]
        public Int32? ImmunizationId
        {
            get { return Fields.ImmunizationId[this]; }
            set { Fields.ImmunizationId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ImmunizationHistoryId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ImmunizationHistoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ImmunizationHistoryId;
            public Int32Field AdmissionId;
            public Int32Field ImmunizationId;
        }
    }
}
