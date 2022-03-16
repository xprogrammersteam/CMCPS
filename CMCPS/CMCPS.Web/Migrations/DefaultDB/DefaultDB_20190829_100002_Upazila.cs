using FluentMigrator;
using System;

namespace CMCPS.Migrations.DefaultDB
{
    [Migration(20190829100002)]
    public class DefaultDB_20190829_100002_Upazila : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Upazila")
                 .WithColumn("UpazilaId").AsInt32().Identity().PrimaryKey().NotNullable()
                 .WithColumn("DistrictId").AsInt32().NotNullable().ForeignKey("FK_Upazila_DistrictId", "District", "DistrictId")
                 .WithColumn("UpazilaName").AsString(100).Nullable();
                

        }
    }
}