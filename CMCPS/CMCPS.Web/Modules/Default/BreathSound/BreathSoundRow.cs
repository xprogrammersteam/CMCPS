
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[BreathSound]")]
    [DisplayName("Breath Sound"), InstanceName("Breath Sound")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.BreathSound")]
    public sealed class BreathSoundRow : Row, IIdRow, INameRow
    {
        [DisplayName("Breath Sound Id"), Identity]
        public Int32? BreathSoundId
        {
            get { return Fields.BreathSoundId[this]; }
            set { Fields.BreathSoundId[this] = value; }
        }

        [DisplayName("Breath Sound Name"), Size(100), QuickSearch]
        public String BreathSoundName
        {
            get { return Fields.BreathSoundName[this]; }
            set { Fields.BreathSoundName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BreathSoundId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BreathSoundName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BreathSoundRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BreathSoundId;
            public StringField BreathSoundName;
        }
    }
}
