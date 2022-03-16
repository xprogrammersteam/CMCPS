
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Investigation]")]
    [DisplayName("Investigation"), InstanceName("Investigation")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Investigation")]
    public sealed class InvestigationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Investigation Id"), Identity]
        public Int32? InvestigationId
        {
            get { return Fields.InvestigationId[this]; }
            set { Fields.InvestigationId[this] = value; }
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
        [DisplayName("Admission Date"),NotMapped]
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

        [DisplayName("PIN Number"), Origin("p", "PinNumber")]
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
        
        [DisplayName("CBC"), Column("CBC"), QuickSearch]
        public String Cbc
        {
            get { return Fields.Cbc[this]; }
            set { Fields.Cbc[this] = value; }
        }

        [DisplayName("Creatinine (mg/dl)")]
        public String Creatinine
        {
            get { return Fields.Creatinine[this]; }
            set { Fields.Creatinine[this] = value; }
        }

        [DisplayName("Urea (mg/dl)")]
        public String Urea
        {
            get { return Fields.Urea[this]; }
            set { Fields.Urea[this] = value; }
        }

        [DisplayName("Sugar (mg/dl)")]
        public String Sugar
        {
            get { return Fields.Sugar[this]; }
            set { Fields.Sugar[this] = value; }
        }

        [DisplayName("Albumin (mg/dl)")]
        public String Albumin
        {
            get { return Fields.Albumin[this]; }
            set { Fields.Albumin[this] = value; }
        }

        [DisplayName("Calcium (mmol/L)")]
        public String Calcium
        {
            get { return Fields.Calcium[this]; }
            set { Fields.Calcium[this] = value; }
        }

      
        [DisplayName("Blood Culture")]
        public String BloodCulture
        {
            get { return Fields.BloodCulture[this]; }
            set { Fields.BloodCulture[this] = value; }
        }

        [DisplayName("CRP (mg/dl)"), Column("CRP")]
        public String Crp
        {
            get { return Fields.Crp[this]; }
            set { Fields.Crp[this] = value; }
        }

        [DisplayName("BT (min)"), Column("BT")]
        public String Bt
        {
            get { return Fields.Bt[this]; }
            set { Fields.Bt[this] = value; }
        }

        [DisplayName("CT (min)"), Column("CT")]
        public String Ct
        {
            get { return Fields.Ct[this]; }
            set { Fields.Ct[this] = value; }
        }

        [DisplayName("Prothrombin Time (min)")]
        public String ProthrombinTime
        {
            get { return Fields.ProthrombinTime[this]; }
            set { Fields.ProthrombinTime[this] = value; }
        }

        [DisplayName("APTT (min)"), Column("APTT")]
        public String Aptt
        {
            get { return Fields.Aptt[this]; }
            set { Fields.Aptt[this] = value; }
        }

        [DisplayName("Option To Add")]
        public String OptionToAddHematology
        {
            get { return Fields.OptionToAddHematology[this]; }
            set { Fields.OptionToAddHematology[this] = value; }
        }
        [DisplayName("Na (mmol/L)")]
        public String Na
        {
            get { return Fields.Na[this]; }
            set { Fields.Na[this] = value; }
        }
        [DisplayName("K (mmol/L)")]
        public String K
        {
            get { return Fields.K[this]; }
            set { Fields.K[this] = value; }
        }
        [DisplayName("Cl (mmol/L)")]
        public String Cl
        {
            get { return Fields.Cl[this]; }
            set { Fields.Cl[this] = value; }
        }
        [DisplayName("HCO3 (mmol/L)")]
        public String HCO3
        {
            get { return Fields.HCO3[this]; }
            set { Fields.HCO3[this] = value; }
        }
        [DisplayName("CXR"), Column("CXR")]
        public String Cxr
        {
            get { return Fields.Cxr[this]; }
            set { Fields.Cxr[this] = value; }
        }

        [DisplayName("AXR"), Column("AXR")]
        public String Axr
        {
            get { return Fields.Axr[this]; }
            set { Fields.Axr[this] = value; }
        }

        [DisplayName("Xray Kub"), Column("XrayKUB")]
        public String XrayKub
        {
            get { return Fields.XrayKub[this]; }
            set { Fields.XrayKub[this] = value; }
        }

        [DisplayName("USG"), Column("USG")]
        public String Usg
        {
            get { return Fields.Usg[this]; }
            set { Fields.Usg[this] = value; }
        }

        [DisplayName("Ba Enema")]
        public String BaEnema
        {
            get { return Fields.BaEnema[this]; }
            set { Fields.BaEnema[this] = value; }
        }

        [DisplayName("Ba Meal Follow Through")]
        public String BaMealFollowThrough
        {
            get { return Fields.BaMealFollowThrough[this]; }
            set { Fields.BaMealFollowThrough[this] = value; }
        }

        [DisplayName("MCU"), Column("MCU")]
        public String Mcu
        {
            get { return Fields.Mcu[this]; }
            set { Fields.Mcu[this] = value; }
        }

        [DisplayName("RGU"), Column("RGU")]
        public String Rgu
        {
            get { return Fields.Rgu[this]; }
            set { Fields.Rgu[this] = value; }
        }

        [DisplayName("IVU"), Column("IVU")]
        public String Ivu
        {
            get { return Fields.Ivu[this]; }
            set { Fields.Ivu[this] = value; }
        }

        [DisplayName("CT Scan"), Column("CTScan")]
        public String CtScan
        {
            get { return Fields.CtScan[this]; }
            set { Fields.CtScan[this] = value; }
        }

        [DisplayName("MRI"), Column("MRI")]
        public String Mri
        {
            get { return Fields.Mri[this]; }
            set { Fields.Mri[this] = value; }
        }

        [DisplayName("Option To Add")]
        public String OptionToAddImaging
        {
            get { return Fields.OptionToAddImaging[this]; }
            set { Fields.OptionToAddImaging[this] = value; }
        }
        [DisplayName(""), NotMapped]
        [MasterDetailRelation(foreignKey: "InvestigationId", IncludeColumns = "OtherLabName")]
        public List<OtherLabWithInvestigationRow> OtherLab
        {
            get { return Fields.OtherLab[this]; }
            set { Fields.OtherLab[this] = value; }
        }
        [DisplayName(""), NotMapped]
        [MasterDetailRelation(foreignKey: "InvestigationId", IncludeColumns = "PathologyName")]
        public List<PathologyAndInvestigationDetailsRow> Pathology
        {
            get { return Fields.Pathology[this]; }
            set { Fields.Pathology[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.InvestigationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public List<InvestigationRow> InvestigationCast { get; internal set; }

        public static readonly RowFields Fields = new RowFields().Init();

        public InvestigationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            //public readonly RowListField<InvestigationRow> InvestigationCast;
            public RowListField<OtherLabWithInvestigationRow> OtherLab;
            public RowListField<PathologyAndInvestigationDetailsRow> Pathology;
            public Int32Field InvestigationId;
            public Int32Field AdmissionId;
            public DateTimeField EntryDate;
            public DateTimeField AdmissionDate;
            public StringField Name;
            public StringField Age;
            public StringField Sex;
            public Int32Field SexId;
            public Int32Field UnitId;
            public Int32Field Weight;
            public StringField BloodGroup;
            public StringField PinNumber;
            public StringField UnitNumber;
            public StringField UnitRegNo;
            public StringField BedNumber;
            public StringField HospitalRegNo;            
            public StringField Cbc;
            public StringField Creatinine;
            public StringField Urea;
            public StringField Sugar;
            public StringField Albumin;
            public StringField Calcium;
           // public StringField Electrolytes;
            public StringField BloodCulture;
           
            public StringField Crp;
            public StringField Bt;
            public StringField Ct;
            public StringField ProthrombinTime;
            public StringField Aptt;
            public StringField OptionToAddHematology;
            public StringField Cxr;
            public StringField Na;
            public StringField K;
            public StringField Cl;
            public StringField HCO3;
            public StringField Axr;
            public StringField XrayKub;
            public StringField Usg;
            public StringField BaEnema;
            public StringField BaMealFollowThrough;
            public StringField Mcu;
            public StringField Rgu;
            public StringField Ivu;
            public StringField CtScan;
            public StringField Mri;
            public StringField OptionToAddImaging;
        }
    }
}
