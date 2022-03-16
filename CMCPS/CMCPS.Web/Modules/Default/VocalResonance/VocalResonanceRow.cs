
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[VocalResonance]")]
    [DisplayName("Vocal Resonance"), InstanceName("Vocal Resonance")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.VocalResonance")]

    public sealed class VocalResonanceRow : Row, IIdRow, INameRow
    {
        [DisplayName("Vocal Resonance Id"), Identity]
        public Int32? VocalResonanceId
        {
            get { return Fields.VocalResonanceId[this]; }
            set { Fields.VocalResonanceId[this] = value; }
        }

        [DisplayName("Vocal Resonance Name"), Size(100), QuickSearch]
        public String VocalResonanceName
        {
            get { return Fields.VocalResonanceName[this]; }
            set { Fields.VocalResonanceName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.VocalResonanceId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.VocalResonanceName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VocalResonanceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field VocalResonanceId;
            public StringField VocalResonanceName;
        }
    }
}
