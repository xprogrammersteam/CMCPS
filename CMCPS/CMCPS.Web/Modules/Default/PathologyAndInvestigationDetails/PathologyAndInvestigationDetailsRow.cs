
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[PathologyAndInvestigationDetails]")]
    [DisplayName("Pathology"), InstanceName("Pathology")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PathologyAndInvestigationDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Investigation"), ForeignKey("[dbo].[Investigation]", "InvestigationId"), LeftJoin("jInvestigation"), TextualField("InvestigationCbc")]
        public Int32? InvestigationId
        {
            get { return Fields.InvestigationId[this]; }
            set { Fields.InvestigationId[this] = value; }
        }
        [LookupEditor(typeof(PathologyRow), InplaceAdd = true)]
        [DisplayName("Pathology"), ForeignKey("[dbo].[Pathology]", "PathologyId"), LeftJoin("jPathology"), TextualField("PathologyName")]
        public Int32? PathologyId
        {
            get { return Fields.PathologyId[this]; }
            set { Fields.PathologyId[this] = value; }
        }

        [DisplayName("Pathology"), Expression("jPathology.[PathologyName]")]
        public String PathologyName
        {
            get { return Fields.PathologyName[this]; }
            set { Fields.PathologyName[this] = value; }
        }
        [DisplayName("Value"), QuickSearch]
        public String Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Value; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PathologyAndInvestigationDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field InvestigationId;
            public Int32Field PathologyId;
            public StringField Value;            
            public StringField PathologyName;
        }
    }
}
