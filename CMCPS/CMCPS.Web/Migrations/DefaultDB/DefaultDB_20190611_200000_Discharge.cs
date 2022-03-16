using FluentMigrator;
using System;

namespace CMCPS.Migrations.DefaultDB
{
    [Migration(20190611200000)]
    public class DefaultDB_20190611_200000_Discharge : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Discharge")
                 .WithColumn("DischargeId").AsInt32().Identity().PrimaryKey().NotNullable()
                 .WithColumn("Date").AsDateTime().Nullable()
                 .WithColumn("AdmissionId").AsInt32().Nullable()
                    .ForeignKey("FK_Discharge_AdmissionId", "Admission", "AdmissionId")

                 .WithColumn("DiagnosisId").AsInt32().Nullable()
                    .ForeignKey("FK_Discharge_DiagnosisId", "Diagnosis", "DiagnosisId")


                 .WithColumn("Investigations").AsString(Int32.MaxValue).Nullable()
                 .WithColumn("TreatmentGiven").AsString(Int32.MaxValue).Nullable()
                 .WithColumn("TreatmentContinues").AsString(Int32.MaxValue).Nullable()
                 .WithColumn("Advice").AsString(Int32.MaxValue).Nullable()

                 .WithColumn("InsertUserId").AsInt32().Nullable()
                 .WithColumn("InsertDate").AsDateTime().Nullable()
                 .WithColumn("UpdateUserId").AsInt32().Nullable()
                 .WithColumn("UpdateDate").AsDateTime().Nullable();

        }
    }
}