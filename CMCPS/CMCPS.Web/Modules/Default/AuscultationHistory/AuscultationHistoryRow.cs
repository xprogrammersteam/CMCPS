
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[AuscultationHistory]")]
    [DisplayName("Auscultation History"), InstanceName("Auscultation History")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.AuscultationHistory")]
    public sealed class AuscultationHistoryRow : Row, IIdRow
    {
        [DisplayName("Auscultation History Id"), Identity]
        public Int32? AuscultationHistoryId
        {
            get { return Fields.AuscultationHistoryId[this]; }
            set { Fields.AuscultationHistoryId[this] = value; }
        }

        [DisplayName("Admission Id"), NotNull]
        public Int32? AdmissionId
        {
            get { return Fields.AdmissionId[this]; }
            set { Fields.AdmissionId[this] = value; }
        }

        [DisplayName("Auscultation Id"), NotNull]
        public Int32? AuscultationId
        {
            get { return Fields.AuscultationId[this]; }
            set { Fields.AuscultationId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AuscultationHistoryId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AuscultationHistoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AuscultationHistoryId;
            public Int32Field AdmissionId;
            public Int32Field AuscultationId;
        }
    }
}
