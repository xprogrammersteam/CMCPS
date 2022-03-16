
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[PercussionHistory]")]
    [DisplayName("Percussion History"), InstanceName("Percussion History")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.PercussionHistory")]
    public sealed class PercussionHistoryRow : Row, IIdRow
    {
        [DisplayName("Percussion History Id"), Identity]
        public Int32? PercussionHistoryId
        {
            get { return Fields.PercussionHistoryId[this]; }
            set { Fields.PercussionHistoryId[this] = value; }
        }

        [DisplayName("Admission Id"), NotNull]
        public Int32? AdmissionId
        {
            get { return Fields.AdmissionId[this]; }
            set { Fields.AdmissionId[this] = value; }
        }

        [DisplayName("Percussion Id"), NotNull]
        public Int32? PercussionId
        {
            get { return Fields.PercussionId[this]; }
            set { Fields.PercussionId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PercussionHistoryId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PercussionHistoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PercussionHistoryId;
            public Int32Field AdmissionId;
            public Int32Field PercussionId;
        }
    }
}
