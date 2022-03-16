
namespace CMC.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[IllnessHistory]")]
    [DisplayName("Illness History"), InstanceName("Illness History")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.IllnessHistory")]
    public sealed class IllnessHistoryRow : Row, IIdRow
    {
        [DisplayName("Illness History Id"), Identity]
        public Int32? IllnessHistoryId
        {
            get { return Fields.IllnessHistoryId[this]; }
            set { Fields.IllnessHistoryId[this] = value; }
        }

        [DisplayName("Admission Id"), NotNull]
        public Int32? AdmissionId
        {
            get { return Fields.AdmissionId[this]; }
            set { Fields.AdmissionId[this] = value; }
        }

        [DisplayName("Illness Id"), NotNull]
        public Int32? IllnessId
        {
            get { return Fields.IllnessId[this]; }
            set { Fields.IllnessId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IllnessHistoryId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public IllnessHistoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IllnessHistoryId;
            public Int32Field AdmissionId;
            public Int32Field IllnessId;
        }
    }
}
