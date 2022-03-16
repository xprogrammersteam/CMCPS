using FluentMigrator;
using System;

namespace CMCPS.Migrations.DefaultDB
{
    [Migration(20190829100001)]
    public class DefaultDB_20190829_100001_District : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("District")
                 .WithColumn("DistrictId").AsInt32().Identity().PrimaryKey().NotNullable()
                 .WithColumn("DistrictName").AsString(Int32.MaxValue).Nullable();
                

        }
    }
}