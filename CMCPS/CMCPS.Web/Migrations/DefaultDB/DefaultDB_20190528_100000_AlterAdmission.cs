using FluentMigrator;
using System;

namespace CMCPS.Migrations.DefaultDB
{
    [Migration(20190528100000)]
    public class DefaultDB_20190528_100000_AlterAdmission : AutoReversingMigration
    {
        public override void Up()
        {
            //.WithColumn("IsProtected").AsBoolean().NotNullable().WithDefaultValue(true)           
            //.WithColumn("DuplicateCount").AsInt32().NotNullable().WithDefaultValue(1));

            //Create.Table("Admission")
            //     .WithColumn("AdmissionId").AsInt32().Identity().PrimaryKey().NotNullable()
            //     .WithColumn("Date").AsDateTime().Nullable()
            //     .WithColumn("Time").AsTime().Nullable()
            //     .WithColumn("HistoryOfPresentIllness").AsString(Int32.MaxValue).Nullable()
            //     .WithColumn("HOPastIllness").AsString(Int32.MaxValue).Nullable()
            //     .WithColumn("DrugHistory").AsString(Int32.MaxValue).Nullable()    
            //     .WithColumn("Immunization").AsBoolean().Nullable().WithDefaultValue(false)                 
            //     .WithColumn("InsertUserId").AsInt32().Nullable()
            //     .WithColumn("InsertDate").AsDateTime().Nullable()
            //     .WithColumn("UpdateUserId").AsInt32().Nullable()
            //     .WithColumn("UpdateDate").AsDateTime().Nullable()

            //      .WithColumn("Weight").AsDecimal().Nullable()
            //      .WithColumn("Height").AsDecimal().Nullable()
            //      .WithColumn("Anemia").AsString(Int32.MaxValue).Nullable()
            //      .WithColumn("Jaundice").AsString(Int32.MaxValue).Nullable()
            //      .WithColumn("Cyanosis").AsString(Int32.MaxValue).Nullable()
            //      .WithColumn("Oedema").AsString(Int32.MaxValue).Nullable()
            //      .WithColumn("Dehydration").AsString(Int32.MaxValue).Nullable()
            //      .WithColumn("Pulse").AsString(Int32.MaxValue).Nullable()
            //      .WithColumn("BP").AsString(Int32.MaxValue).Nullable()
            //      .WithColumn("RespRate").AsString(Int32.MaxValue).Nullable()
            //      .WithColumn("Temperature").AsString(Int32.MaxValue).Nullable()

            //      .WithColumn("Inspection").AsString(Int32.MaxValue).Nullable()
            //      .WithColumn("Palpation").AsString(Int32.MaxValue).Nullable()
            //      .WithColumn("Percussion").AsString(Int32.MaxValue).Nullable()
            //      .WithColumn("Auscultation").AsString(Int32.MaxValue).Nullable()
            //      .WithColumn("Other").AsString(Int32.MaxValue).Nullable();

            



        }
    }
}