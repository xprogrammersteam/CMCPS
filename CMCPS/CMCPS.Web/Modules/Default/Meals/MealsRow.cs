
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Meals]")]
    [DisplayName("Meals"), InstanceName("Meals")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Meals")]
    public sealed class MealsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Meal Id"), Identity]
        public Int32? MealId
        {
            get { return Fields.MealId[this]; }
            set { Fields.MealId[this] = value; }
        }

        [DisplayName("Meal Name"), Size(500), QuickSearch]
        public String MealName
        {
            get { return Fields.MealName[this]; }
            set { Fields.MealName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MealId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MealName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MealsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MealId;
            public StringField MealName;
        }
    }
}
