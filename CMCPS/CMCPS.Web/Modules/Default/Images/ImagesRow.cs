
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Images]")]
    [DisplayName("Images"), InstanceName("Images")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ImagesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Image Id"), Identity]
        public Int32? ImageId
        {
            get { return Fields.ImageId[this]; }
            set { Fields.ImageId[this] = value; }
        }
        [LookupEditor(typeof(Default.Entities.AdmissionRow), InplaceAdd = false), QuickFilter(true)]
        [DisplayName("Name of Patient"), NotNull, ForeignKey("[dbo].[Admission]", "AdmissionId"), LeftJoin("jAdmission")]
        public Int32? AdmissionId
        {
            get { return Fields.AdmissionId[this]; }
            set { Fields.AdmissionId[this] = value; }
        }
        [DisplayName("Name of Patient"), Expression("jAdmission.[Name]")]      
        public String PatientName
        {
            get { return Fields.PatientName[this]; }
            set { Fields.PatientName[this] = value; }
        }
        [DisplayName("Entry Date")]
        public DateTime? EntryDate
        {
            get { return Fields.EntryDate[this]; }
            set { Fields.EntryDate[this] = value; }
        }
        [DisplayName("Age"), Expression("jAdmission.Age")]
        public String Age
        {
            get { return Fields.Age[this]; }
            set { Fields.Age[this] = value; }
        }
        [DisplayName("Sex"), ForeignKey("[dbo].[Sex]", "SexId"), LeftJoin("jSex"), Expression("jAdmission.SexId")]
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
        [DisplayName("Weight (kg)"), Expression("jAdmission.Weight")]
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

        [DisplayName("PIN Number"),  Expression("jAdmission.[PinNumber]")]
        public String PinNumber
        {
            get { return Fields.PinNumber[this]; }
            set { Fields.PinNumber[this] = value; }
        }
        [DisplayName("Unit Number"), ForeignKey("[dbo].[Unit]", "UnitId"), LeftJoin("jUnit"), Expression("jAdmission.UnitId")]
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
        [DisplayName("Unit Reg No."), Expression("jAdmission.UnitRegNumber")]
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
        [DisplayName("Hospital Reg No"), Expression("jAdmission.HospitalRegNumber")]
        public String HospitalRegNo
        {
            get { return Fields.HospitalRegNo[this]; }
            set { Fields.HospitalRegNo[this] = value; }
        }
        [DisplayName("Image"), QuickSearch]
        public String Image
        {
            get { return Fields.Image[this]; }
            set { Fields.Image[this] = value; }
        }
      
        IIdField IIdRow.IdField
        {
            get { return Fields.ImageId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PatientName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ImagesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ImageId;
            public Int32Field AdmissionId;
            public StringField Image;
            
            public DateTimeField EntryDate;
            public DateTimeField AdmissionDate;
            public StringField PatientName;
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
        }
    }
}
