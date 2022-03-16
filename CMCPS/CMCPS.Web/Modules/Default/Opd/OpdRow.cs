
namespace CMCPS.Default.Entities
{
    using CMCPS.Modules.Default.Admission;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[OPD]")]
    [DisplayName("Outdoor Patient"), InstanceName("Outdoor Patient")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [InsertPermission("Default:Administration:Insert")]
    //[UpdatePermission("ProjectMonitoringSystem:ContractInfo:Update")]
    //[DeletePermission("ProjectMonitoringSystem:ContractInfo:Delete")]

    public sealed class OpdRow : Row, IIdRow, INameRow
    {
        [DisplayName("Opd Id"), Column("OpdID"), Identity]
        public Int32? OpdId
        {
            get { return Fields.OpdId[this]; }
            set { Fields.OpdId[this] = value; }
        }

        [DisplayName("Name"), Size(100), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Date")]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Age"), Size(50)]
        public String Age
        {
            get { return Fields.Age[this]; }
            set { Fields.Age[this] = value; }
        }

        [DisplayName("Sex"), ForeignKey("[dbo].[Sex]", "SexId"), LeftJoin("jSex")]
        [LookupEditor(typeof(SexRow), InplaceAdd = true)]
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
        [DisplayName("Body Wt (kg)"), Size(100)]
        public String BodyWt
        {
            get { return Fields.BodyWt[this]; }
            set { Fields.BodyWt[this] = value; }
        }

        [DisplayName("Reg No"), Size(100)]
        public String RegNo
        {
            get { return Fields.RegNo[this]; }
            set { Fields.RegNo[this] = value; }
        }

        [DisplayName("PIN No"), Size(100)]
        public String PinNo
        {
            get { return Fields.PinNo[this]; }
            set { Fields.PinNo[this] = value; }
        }

        [DisplayName("Unit Number"), ForeignKey("[dbo].[Unit]", "UnitId"), LeftJoin("jUnit")]
        [LookupEditor(typeof(UnitRow), InplaceAdd = true)]
        public Int32? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
        }

        [DisplayName("Unit Number"), Expression("jUnit.UnitNumber")]       
        public String UniNo
        {
            get { return Fields.UniNo[this]; }
            set { Fields.UniNo[this] = value; }
        }

        //[DisplayName("Patient Type"), ForeignKey("[dbo].[PatientType]", "PatientTypeId"), LeftJoin("jPatientType")]
        //[LookupEditor(typeof(PatientTypeRow))]
        //public Int32? PatientTypeId
        //{
        //    get { return Fields.PatientTypeId[this]; }
        //    set { Fields.PatientTypeId[this] = value; }
        //}

        //[DisplayName("Patient Type"), Expression("jPatientType.PatientType")]
        //public String PatientType
        //{
        //    get { return Fields.PatientType[this]; }
        //    set { Fields.PatientType[this] = value; }
        //}

        [DisplayName("Patient Type"), Size(100)]
        public TypeOfPatient? PatientType
        {
            get { return (TypeOfPatient?)Fields.PatientType[this]; }
            set { Fields.PatientType[this] = (Int32?)value; }
        }

        [DisplayName("Address")]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("District Name"), ForeignKey("[dbo].[District]", "DistrictId"), LeftJoin("jDistrict")]
        [LookupEditor(typeof(DistrictRow), InplaceAdd = true)]
        public Int32? DistrictId
        {
            get { return Fields.DistrictId[this]; }
            set { Fields.DistrictId[this] = value; }
        }

        [DisplayName("District Name"), Expression("jDistrict.DistrictName")]
        public String DistrictName
        {
            get { return Fields.DistrictName[this]; }
            set { Fields.DistrictName[this] = value; }
        }

        [DisplayName("Upazila Name"), ForeignKey("[dbo].[Upazila]", "UpazilaId"), LeftJoin("jUpazila")]
        [LookupEditor(typeof(UpazilaRow), CascadeFrom = "DistrictId", InplaceAdd = true)]
        public Int32? UpazilaId
        {
            get { return Fields.UpazilaId[this]; }
            set { Fields.UpazilaId[this] = value; }
        }

        [DisplayName("Upazila Name"), Expression("jUpazila.UpazilaName")]
        public String UpazilaName
        {
            get { return Fields.UpazilaName[this]; }
            set { Fields.UpazilaName[this] = value; }
        }
        [DisplayName("House/Vill:")]

        public String House
        {
            get { return Fields.House[this]; }
            set { Fields.House[this] = value; }
        }
        [DisplayName("Post Office")]

        public String PostOffice
        {
            get { return Fields.PostOffice[this]; }
            set { Fields.PostOffice[this] = value; }
        }
        [DisplayName("Mobile No")]

        public String Mobile
        {
            get { return Fields.Mobile[this]; }
            set { Fields.Mobile[this] = value; }
        }
        [NotMapped, DisplayName("Diagnosis")]
        [MasterDetailRelation(foreignKey: "OpdId", IncludeColumns = "Diagnosis")]
        public List<OpdWithDiagnosisDetailsRow> DiagnosisDetails
        {
            get { return Fields.DiagnosisDetails[this]; }
            set { Fields.DiagnosisDetails[this] = value; }
        }
        [DisplayName("History")]
        public String History
        {
            get { return Fields.History[this]; }
            set { Fields.History[this] = value; }
        }
        [DisplayName("Examination")]
        public String Examination
        {
            get { return Fields.Examination[this]; }
            set { Fields.Examination[this] = value; }
        }
        [DisplayName("Investigation")]
        public String Investigation
        {
            get { return Fields.Investigation[this]; }
            set { Fields.Investigation[this] = value; }
        }
        [DisplayName("")]
        public String Doctor
        {
            get { return Fields.Doctor[this]; }
            set { Fields.Doctor[this] = value; }
        }
        [DisplayName("Advice")]
        public String Advice
        {
            get { return Fields.Advice[this]; }
            set { Fields.Advice[this] = value; }
        }

        [DisplayName("Remarks")]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OpdId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OpdRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OpdId;
            public StringField Name;
            public DateTimeField Date;
            public StringField Age;
            public Int32Field SexId;
            public StringField Sex;
            public StringField BodyWt;
            public StringField RegNo;
            public StringField PinNo;
            public Int32Field UnitId;
            public StringField UniNo;
            public Int32Field PatientType;            
            public StringField Address;
            public Int32Field DistrictId;
            public StringField DistrictName;
            public Int32Field UpazilaId;
            public StringField UpazilaName;
            public StringField House;
            public StringField PostOffice;
            public StringField Mobile;
            public StringField History;
            public StringField Examination;
            public StringField Investigation;
            public StringField Doctor;
            public StringField Advice;
            public StringField Remarks;
            public RowListField<OpdWithDiagnosisDetailsRow> DiagnosisDetails;
        }
    }
}
