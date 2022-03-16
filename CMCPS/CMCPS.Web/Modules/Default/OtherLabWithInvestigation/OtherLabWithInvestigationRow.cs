
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[OtherLabWithInvestigation]")]
    [DisplayName("Other Lab"), InstanceName("Other Lab")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class OtherLabWithInvestigationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey, Identity]
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
               
       
        [LookupEditor(typeof(OtherLabRow), InplaceAdd = true)]
        [DisplayName("Other Lab"), ForeignKey("[dbo].[OtherLab]", "LabId"), LeftJoin("jOtherLab"), TextualField("OtherLabName")]
        public Int32? OtherLabId
        {
            get { return Fields.OtherLabId[this]; }
            set { Fields.OtherLabId[this] = value; }
        }
        [DisplayName("Other Lab"), Expression("jOtherLab.[Name]")]
        public String OtherLabName
        {
            get { return Fields.OtherLabName[this]; }
            set { Fields.OtherLabName[this] = value; }
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

        public OtherLabWithInvestigationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field InvestigationId;
            public Int32Field OtherLabId;
            public StringField Value;         

            public StringField OtherLabName;
        }
    }
}
