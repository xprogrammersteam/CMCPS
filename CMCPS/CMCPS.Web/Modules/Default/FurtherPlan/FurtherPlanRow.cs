
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[FurtherPlan]")]
    [DisplayName("Further Plan"), InstanceName("Further Plan")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.FurtherPlan")]
    public sealed class FurtherPlanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Further Plan Id"), Identity]
        public Int32? FurtherPlanId
        {
            get { return Fields.FurtherPlanId[this]; }
            set { Fields.FurtherPlanId[this] = value; }
        }

        [DisplayName("Further Plan Name"), Size(200), QuickSearch]
        public String FurtherPlanName
        {
            get { return Fields.FurtherPlanName[this]; }
            set { Fields.FurtherPlanName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.FurtherPlanId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FurtherPlanName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FurtherPlanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FurtherPlanId;
            public StringField FurtherPlanName;
        }
    }
}
