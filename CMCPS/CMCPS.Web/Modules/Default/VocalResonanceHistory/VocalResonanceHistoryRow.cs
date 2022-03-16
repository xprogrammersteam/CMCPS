
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[VocalResonanceHistory]")]
    [DisplayName("Vocal Resonance History"), InstanceName("Vocal Resonance History")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.VocalResonanceHistory")]
    public sealed class VocalResonanceHistoryRow : Row, IIdRow
    {
        [DisplayName("Vocal Resonance History Id"), Identity]
        public Int32? VocalResonanceHistoryId
        {
            get { return Fields.VocalResonanceHistoryId[this]; }
            set { Fields.VocalResonanceHistoryId[this] = value; }
        }

        [DisplayName("Admission Id"), NotNull]
        public Int32? AdmissionId
        {
            get { return Fields.AdmissionId[this]; }
            set { Fields.AdmissionId[this] = value; }
        }

        [DisplayName("Vocal Resonance Id"), NotNull]
        public Int32? VocalResonanceId
        {
            get { return Fields.VocalResonanceId[this]; }
            set { Fields.VocalResonanceId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.VocalResonanceHistoryId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VocalResonanceHistoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field VocalResonanceHistoryId;
            public Int32Field AdmissionId;
            public Int32Field VocalResonanceId;
        }
    }
}
