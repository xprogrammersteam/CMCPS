
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Treatment]")]
    [DisplayName("Treatment"), InstanceName("Treatment")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TreatmentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Treatment Id"), Identity]
        public Int32? TreatmentId
        {
            get { return Fields.TreatmentId[this]; }
            set { Fields.TreatmentId[this] = value; }
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
        [DisplayName("Weight (kg)"), Origin("p", "Weight")]
        public Int32? Weight
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
        [LookupEditor(typeof(MedicineRow), InplaceAdd = true)]
        [DisplayName("Medicine"), NotMapped, ForeignKey("[dbo].[Medicine]", "MedicineId"), LeftJoin("jMedicine"), TextualField("MedicineName")]
        public Int32? MedicineId
        {
            get { return Fields.MedicineId[this]; }
            set { Fields.MedicineId[this] = value; }
        }
        [LookupEditor(typeof(DoaseRow), InplaceAdd = true)]
        [DisplayName("Dose"), NotMapped, ForeignKey("[dbo].[Doase]", "DoaseId"), LeftJoin("jDoase"), TextualField("DoaseName")]
        public Int32? DoaseId
        {
            get { return Fields.DoaseId[this]; }
            set { Fields.DoaseId[this] = value; }
        }
        [LookupEditor(typeof(DurationRow), InplaceAdd = true)]
        [DisplayName("Duration"), NotMapped, ForeignKey("[dbo].[Duration]", "DurationId"), LeftJoin("jDuration"), TextualField("DurationName")]
        public Int32? DurationId
        {
            get { return Fields.DurationId[this]; }
            set { Fields.DurationId[this] = value; }
        }
        [NotMapped]
        public String AddtoArea
        {
            get { return Fields.AddtoArea[this]; }
            set { Fields.AddtoArea[this] = value; }
        }
        
        [DisplayName("Treatment"), QuickSearch]
        public String Treatment
        {
            get { return Fields.Treatment[this]; }
            set { Fields.Treatment[this] = value; }
        }
        
        public String Doctor
        {
            get { return Fields.Doctor[this]; }
            set { Fields.Doctor[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.TreatmentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TreatmentRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TreatmentId;
            public Int32Field AdmissionId;
            public StringField Treatment;
            public StringField Doctor;

            public DateTimeField EntryDate;
            public DateTimeField AdmissionDate;
            public StringField Name;
            public StringField Age;
            public Int32Field SexId;
            public Int32Field UnitId;
            public StringField Sex;
            public Int32Field Weight;
            public StringField BloodGroup;
            public StringField PinNumber;
            public StringField UnitNumber;
            public StringField UnitRegNo;
            public StringField BedNumber;
            public StringField HospitalRegNo;

            public Int32Field MedicineId;
            public Int32Field DoaseId;
            public Int32Field DurationId;
            public StringField AddtoArea;
           
        }
    }
}
