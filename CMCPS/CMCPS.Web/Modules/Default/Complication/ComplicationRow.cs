
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Complication]")]
    [DisplayName("Complication"), InstanceName("Complication")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    //[LookupScript("Default.Complication")]
    public sealed class ComplicationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Complication Id"), Identity]
        public Int32? ComplicationId
        {
            get { return Fields.ComplicationId[this]; }
            set { Fields.ComplicationId[this] = value; }
        }

        [DisplayName("Name of Patient"), Column("AdmissionId"), NotNull, QuickSearch]
        [LookupEditor(typeof(Default.Entities.AdmissionRow), InplaceAdd = false), QuickFilter(true)]
        [ForeignKey(typeof(Default.Entities.AdmissionRow), "AdmissionId"), LeftJoin("p", PropertyPrefix = "Name")]
        public Int32? AdmissionId
        {
            get { return Fields.AdmissionId[this]; }
            set { Fields.AdmissionId[this] = value; }
        }

        [Origin("p", "Name"), DisplayName("Name of Patient"), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Entry Date")]
        public DateTime? EntryDate
        {
            get { return Fields.EntryDate[this]; }
            set { Fields.EntryDate[this] = value; }
        }
        [DisplayName("Age"), Origin("p", "Age")]
        public String Age
        {
            get { return Fields.Age[this]; }
            set { Fields.Age[this] = value; }
        }
        [DisplayName("Sex"), ForeignKey("[dbo].[Sex]", "SexId"), LeftJoin("jSex"), Origin("p", "SexId")]
        [LookupEditor(typeof(SexRow))]
        public Int32? SexId
        {
            get { return Fields.SexId[this]; }
            set { Fields.SexId[this] = value; }
        }

        [DisplayName("Sex"), Expression("jSex.Sex")]
        //[DisplayName("Sex"), NotMapped]
        public String Sex
        {
            get { return Fields.Sex[this]; }
            set { Fields.Sex[this] = value; }
        }
        [DisplayName("Admission Date"), NotMapped]
        public DateTime? AdmissionDate
        {
            get { return Fields.AdmissionDate[this]; }
            set { Fields.AdmissionDate[this] = value; }
        }
        [DisplayName("Weight (kg)"), NotMapped]
        public String Weight
        {
            get { return Fields.Weight[this]; }
            set { Fields.Weight[this] = value; }
        }
        [DisplayName("Blood Group"), NotMapped]
        public String BloodGroup
        {
            get { return Fields.BloodGroup[this]; }
            set { Fields.BloodGroup[this] = value; }
        }

        [DisplayName("PIN Number")]
        public String PinNumber
        {
            get { return Fields.PinNumber[this]; }
            set { Fields.PinNumber[this] = value; }
        }
        [DisplayName("Unit Number"), ForeignKey("[dbo].[Unit]", "UnitId"), LeftJoin("jUnit"), Origin("p", "UnitId")]
        [LookupEditor(typeof(UnitRow), InplaceAdd = false)]
        public Int32? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
        }
        [DisplayName("Unit Number"), Expression("jUnit.UnitNumber")]
        
        public String UnitNumber
        {
            get { return Fields.UnitNumber[this]; }
            set { Fields.UnitNumber[this] = value; }
        }
        [DisplayName("Unit Reg No."), Origin("p", "UnitRegNumber")]
        public String UnitRegNo
        {
            get { return Fields.UnitRegNo[this]; }
            set { Fields.UnitRegNo[this] = value; }
        }
        [DisplayName("Bed Number"), NotMapped]
        public String BedNumber
        {
            get { return Fields.BedNumber[this]; }
            set { Fields.BedNumber[this] = value; }
        }
        [DisplayName("Hospital Reg No"), Origin("p", "HospitalRegNumber")]
        public String HospitalRegNo
        {
            get { return Fields.HospitalRegNo[this]; }
            set { Fields.HospitalRegNo[this] = value; }
        }
        [LookupEditor(typeof(OperationRow), InplaceAdd = false)]
        [DisplayName("Name of Operation"), ForeignKey("[dbo].[Operation]", "OperationId"), LeftJoin("jOperation"), Origin("p", "OperationId")]
        public Int32? OperationId
        {
            get { return Fields.OperationId[this]; }
            set { Fields.OperationId[this] = value; }
        }
        [DisplayName("Name of Operation"), Expression("jOperation.[OperationName]")]
        public String OperationName
        {
            get { return Fields.OperationName[this]; }
            set { Fields.OperationName[this] = value; }
        }
        [DisplayName("Final Diagnosis"), Origin("p", "FinalDiagnosis")]
        public String FinalDiagnosis
        {
            get { return Fields.FinalDiagnosis[this]; }
            set { Fields.FinalDiagnosis[this] = value; }
        }
        
        [DisplayName("Complication Name"), ForeignKey("[dbo].[ComplicationNote]", "ComplicationNoteId"), LeftJoin("jComplicationNote"), TextualField("jComplicationNote.ComplicationNote)")]
        [LookupEditor(typeof(ComplicationNoteRow),InplaceAdd =true),NotMapped]
        public Int32? ComplicationNoteId
        {
            get { return Fields.ComplicationNoteId[this]; }
            set { Fields.ComplicationNoteId[this] = value; }
        }
        [DisplayName("")]
        public String ComplicationName
        {
            get { return Fields.ComplicationName[this]; }
            set { Fields.ComplicationName[this] = value; }
        }
        [NotMapped]
        public string AddtoComplication
        {
            get { return Fields.AddtoComplication[this]; }
            set { Fields.AddtoComplication[this] = value; }
        }
        public String Doctor
        {
            get { return Fields.Doctor[this]; }
            set { Fields.Doctor[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.ComplicationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ComplicationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ComplicationId;
            public Int32Field AdmissionId;
            public Int32Field SexId;
            public Int32Field UnitId;
            public DateTimeField EntryDate;
            public DateTimeField AdmissionDate;
            public StringField Name;
            public StringField Age;
            public StringField Sex;
            public StringField Weight;
            public StringField BloodGroup;
            public Int32Field OperationId;
            public StringField OperationName;
            public StringField PinNumber;
            public StringField UnitNumber;
            public StringField UnitRegNo;
            public StringField BedNumber;
            public StringField HospitalRegNo;
            public StringField FinalDiagnosis;
            public StringField ComplicationName;
            public Int32Field ComplicationNoteId;
            public StringField AddtoComplication;
            public StringField Doctor;
        }
    }
}
