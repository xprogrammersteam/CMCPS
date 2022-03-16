using FluentMigrator;
using System;

namespace CMCPS.Migrations.DefaultDB
{
    [Migration(20190609100000)]
    public class DefaultDB_20190609_100000_FollowUp : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("FollowUp")
                 .WithColumn("FollowUpId").AsInt32().Identity().PrimaryKey().NotNullable()
                 .WithColumn("AdmissionId").AsInt32().Nullable()
                    .ForeignKey("FK_FollowUp_AdmissionId", "Admission", "AdmissionId")

                 .WithColumn("ChiefComplaint").AsString(Int32.MaxValue).Nullable()
                 .WithColumn("Exam").AsString(Int32.MaxValue).Nullable()
                 .WithColumn("Advice").AsString(Int32.MaxValue).Nullable()
                 .WithColumn("Note").AsString(Int32.MaxValue).Nullable()
                 .WithColumn("Plan").AsString(Int32.MaxValue).Nullable()

                 .WithColumn("InsertUserId").AsInt32().Nullable()
                 .WithColumn("InsertDate").AsDateTime().Nullable()
                 .WithColumn("UpdateUserId").AsInt32().Nullable()
                 .WithColumn("UpdateDate").AsDateTime().Nullable();

        }
    }
}