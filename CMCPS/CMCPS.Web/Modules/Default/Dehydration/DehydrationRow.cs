
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Dehydration]")]
    [DisplayName("Dehydration"), InstanceName("Dehydration")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Dehydration")]
    public sealed class DehydrationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Dehydration Id"), Identity]
        public Int32? DehydrationId
        {
            get { return Fields.DehydrationId[this]; }
            set { Fields.DehydrationId[this] = value; }
        }

        [DisplayName("Dehydration"), Size(50), QuickSearch]
        public String Dehydration
        {
            get { return Fields.Dehydration[this]; }
            set { Fields.Dehydration[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DehydrationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Dehydration; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DehydrationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DehydrationId;
            public StringField Dehydration;
        }
    }
}
