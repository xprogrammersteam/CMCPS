using FluentMigrator;
using System;

namespace CMCPS.Migrations.DefaultDB
{
    [Migration(20190525200000)]
    public class DefaultDB_20190525_200000_InitialSetup : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Unit")
                .WithColumn("UnitId").AsInt32().Identity().PrimaryKey().NotNullable() 
                .WithColumn("UnitNumber").AsString(Int32.MaxValue).Nullable()
                .WithColumn("Note").AsString(Int32.MaxValue).Nullable();


            Alter.Table("Admission")
                .AddColumn("UnitId").AsInt32().Nullable()
                    .ForeignKey("FK_Admission_UnitId", "Unit", "UnitId");

            Create.Table("Bed")
                .WithColumn("BedId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("BedNumber").AsString(Int32.MaxValue).Nullable()
                .WithColumn("Note").AsString(Int32.MaxValue).Nullable();

            Alter.Table("Admission")
                .AddColumn("BedId").AsInt32().Nullable()
                    .ForeignKey("FK_Admission_BedId", "Bed", "BedId");

            Create.Table("Diagnosis")
                 .WithColumn("DiagnosisId").AsInt32().Identity().PrimaryKey().NotNullable()
                 .WithColumn("DiagnosisName").AsString(Int32.MaxValue).Nullable()
                 .WithColumn("Note").AsString(Int32.MaxValue).Nullable();
            
            Create.Table("PresentingComplaints")
                 .WithColumn("PComplaintsId").AsInt32().Identity().PrimaryKey().NotNullable()
                 .WithColumn("PComplaints").AsString(Int32.MaxValue).Nullable()
                 .WithColumn("Note").AsString(Int32.MaxValue).Nullable();

            Alter.Table("Admission")
                .AddColumn("PComplaintsId").AsInt32().Nullable()
                    .ForeignKey("FK_Admission_PComplaintsId", "PresentingComplaints", "PComplaintsId");

            Create.Table("BirthHistory")
                 .WithColumn("BirthHistoryId").AsInt32().Identity().PrimaryKey().NotNullable()
                 .WithColumn("BirthHistory").AsString(Int32.MaxValue).Nullable()
                 .WithColumn("Note").AsString(Int32.MaxValue).Nullable();

            Alter.Table("Admission")
                .AddColumn("BirthHistoryId").AsInt32().Nullable()
                    .ForeignKey("FK_Admission_BirthHistoryId", "BirthHistory", "BirthHistoryId");

            Create.Table("FamilyHistory")
                 .WithColumn("FamilyHistoryId").AsInt32().Identity().PrimaryKey().NotNullable()
                 .WithColumn("FamilyHistory").AsString(Int32.MaxValue).Nullable()
                 .WithColumn("Note").AsString(Int32.MaxValue).Nullable();

            Alter.Table("Admission")
                .AddColumn("FamilyHistoryId").AsInt32().Nullable()
                    .ForeignKey("FK_Admission_FamilyHistoryId", "FamilyHistory", "FamilyHistoryId");

            Create.Table("Sex")
               .WithColumn("SexId").AsInt32().Identity().PrimaryKey().NotNullable()
               .WithColumn("Sex").AsString(Int32.MaxValue).Nullable()
               .WithColumn("Note").AsString(Int32.MaxValue).Nullable();

            Alter.Table("Admission")
                .AddColumn("SexId").AsInt32().Nullable()
                    .ForeignKey("FK_Admission_SexId", "Sex", "SexId");
        }
    }
}