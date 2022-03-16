
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[PostNatal]")]
    [DisplayName("Post Natal"), InstanceName("Post Natal")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.PostNatal")]
    public sealed class PostNatalRow : Row, IIdRow, INameRow
    {
        [DisplayName("Post Natal Id"), Identity]
        public Int32? PostNatalId
        {
            get { return Fields.PostNatalId[this]; }
            set { Fields.PostNatalId[this] = value; }
        }

        [DisplayName("Post Natal Name"), Size(100), QuickSearch]
        public String PostNatalName
        {
            get { return Fields.PostNatalName[this]; }
            set { Fields.PostNatalName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PostNatalId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PostNatalName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PostNatalRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PostNatalId;
            public StringField PostNatalName;
        }
    }
}
