
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Sex]")]
    [DisplayName("Sex"), InstanceName("Sex")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]

    [LookupScript("Default.Sex")]
    public sealed class SexRow : Row, IIdRow, INameRow
    {
        [DisplayName("Sex Id"), Identity]
        public Int32? SexId
        {
            get { return Fields.SexId[this]; }
            set { Fields.SexId[this] = value; }
        }

        [DisplayName("Sex"), QuickSearch]
        public String Sex
        {
            get { return Fields.Sex[this]; }
            set { Fields.Sex[this] = value; }
        }

        [DisplayName("Note")]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }
        
        IIdField IIdRow.IdField
        {
            get { return Fields.SexId; }
          
        }
       
        StringField INameRow.NameField
        {
            get { return Fields.Sex; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SexRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SexId;
            public StringField Sex;
            public StringField Note;
            
        }
    }
}
