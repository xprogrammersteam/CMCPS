
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Auscultation]")]
    [DisplayName("Auscultation"), InstanceName("Auscultation")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Auscultation")]
    public sealed class AuscultationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Auscultation Id"), Identity]
        public Int32? AuscultationId
        {
            get { return Fields.AuscultationId[this]; }
            set { Fields.AuscultationId[this] = value; }
        }

        [DisplayName("Auscultation Name"), Size(100), QuickSearch]
        public String AuscultationName
        {
            get { return Fields.AuscultationName[this]; }
            set { Fields.AuscultationName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AuscultationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AuscultationName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AuscultationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AuscultationId;
            public StringField AuscultationName;
        }
    }
}
