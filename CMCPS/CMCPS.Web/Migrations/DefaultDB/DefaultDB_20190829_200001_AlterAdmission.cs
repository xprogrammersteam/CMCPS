using FluentMigrator;
using System;

namespace CMCPS.Migrations.DefaultDB
{
    [Migration(20190829200001)]
    public class DefaultDB_20190829_200001_AlterAdmission : AutoReversingMigration
    {
        public override void Up()
        {
            //Alter.Table("Admission")
            //         .AddColumn("DistrictId").AsInt32().Nullable()
            //         .AddColumn("UpazilaId").AsInt32().Nullable()
            //         .AddColumn("Address").AsString(200).Nullable();





        }
    }
}