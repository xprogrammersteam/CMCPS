
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[BreathSoundHistory]")]
    [DisplayName("Breath Sound History"), InstanceName("Breath Sound History")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.BreathSoundHistory")]
    public sealed class BreathSoundHistoryRow : Row, IIdRow
    {
        [DisplayName("Breath Sound History Id"), Identity]
        public Int32? BreathSoundHistoryId
        {
            get { return Fields.BreathSoundHistoryId[this]; }
            set { Fields.BreathSoundHistoryId[this] = value; }
        }

        [DisplayName("Admission Id"), NotNull]
        public Int32? AdmissionId
        {
            get { return Fields.AdmissionId[this]; }
            set { Fields.AdmissionId[this] = value; }
        }

        [DisplayName("Breath Sound Id"), NotNull]
        public Int32? BreathSoundId
        {
            get { return Fields.BreathSoundId[this]; }
            set { Fields.BreathSoundId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BreathSoundHistoryId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BreathSoundHistoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BreathSoundHistoryId;
            public Int32Field AdmissionId;
            public Int32Field BreathSoundId;
        }
    }
}
