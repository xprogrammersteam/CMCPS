using FluentMigrator;
using System;

namespace CMCPS.Migrations.DefaultDB
{
    [Migration(20190526100000)]
    public class DefaultDB_20190526_100000_PatientBirthHistory : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("PatientBirthHistory")
                .WithColumn("PBHistoryId").AsInt32().Identity().PrimaryKey().NotNullable()

                .WithColumn("AdmissionId").AsInt32().NotNullable()
                    .ForeignKey("FK_PatientBirthHistory_AdmissionId", "Admission", "AdmissionId")

                .WithColumn("BirthHistoryId").AsInt32().NotNullable()
                    .ForeignKey("FK_PatientBirthHistory_BirthHistoryId", "BirthHistory", "BirthHistoryId");

            Execute.Sql(@"INSERT INTO PatientBirthHistory (AdmissionId, BirthHistoryId) 
                    SELECT AdmissionId, BirthHistoryId 
                    FROM Admission 
                    WHERE BirthHistoryId IS NOT NULL");

            Delete.ForeignKey("FK_Admission_BirthHistoryId").OnTable("Admission");
            Delete.Column("BirthHistoryId").FromTable("Admission");

        }
    }
}