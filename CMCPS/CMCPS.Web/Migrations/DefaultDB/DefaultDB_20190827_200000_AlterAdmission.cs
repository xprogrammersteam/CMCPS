using FluentMigrator;
using System;

namespace CMCPS.Migrations.DefaultDB
{
    [Migration(20190827200000)]
    public class DefaultDB_20190827_200000_AlterAdmission : AutoReversingMigration
    {
        public override void Up()
        {
            //Alter.Table("Admission")
            //         .AddColumn("FatherName").AsString(200).Nullable()
            //         .AddColumn("FatherNID").AsString(20).Nullable()
            //         .AddColumn("MotherName").AsString(200).Nullable()
            //         .AddColumn("MotherNID").AsString(20).Nullable()
            //         .AddColumn("HospitalRegNumber").AsString(50).Nullable();

            //Alter.Table("Discharge")
            //       .AddColumn("TreatmentSummary").AsString(int.MaxValue).Nullable();





        }
    }
}