
namespace CMCPS.Default.Entities
{
    
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Discharge]")]
    [DisplayName("Discharge"), InstanceName("Discharge")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Discharge")]
    public sealed class DischargeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Discharge Id"), Identity]
        public Int32? DischargeId
        {
            get { return Fields.DischargeId[this]; }
            set { Fields.DischargeId[this] = value; }
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
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
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
        
        [DisplayName("CBC"), Column("CBC"), NotMapped]
        public String Cbc
        {
            get { return Fields.Cbc[this]; }
            set { Fields.Cbc[this] = value; }
        }

        [DisplayName("Creatinine (mg/dl)"), NotMapped]
        public String Creatinine
        {
            get { return Fields.Creatinine[this]; }
            set { Fields.Creatinine[this] = value; }
        }

        [DisplayName("Urea (mg/dl)"), NotMapped]
        public String Urea
        {
            get { return Fields.Urea[this]; }
            set { Fields.Urea[this] = value; }
        }

        [DisplayName("Sugar (mg/dl)"), NotMapped]
        public String Sugar
        {
            get { return Fields.Sugar[this]; }
            set { Fields.Sugar[this] = value; }
        }

        [DisplayName("Albumin (mg/dl)"), NotMapped]
        public String Albumin
        {
            get { return Fields.Albumin[this]; }
            set { Fields.Albumin[this] = value; }
        }

        [DisplayName("Calcium (mmol/L)"), NotMapped]
        public String Calcium
        {
            get { return Fields.Calcium[this]; }
            set { Fields.Calcium[this] = value; }
        }


        [DisplayName("Blood Culture"), NotMapped]
        public String BloodCulture
        {
            get { return Fields.BloodCulture[this]; }
            set { Fields.BloodCulture[this] = value; }
        }

        [DisplayName("CRP (mg/dl)"), Column("CRP"), NotMapped]
        public String Crp
        {
            get { return Fields.Crp[this]; }
            set { Fields.Crp[this] = value; }
        }

        [DisplayName("BT (min)"), Column("BT"), NotMapped]
        public String Bt
        {
            get { return Fields.Bt[this]; }
            set { Fields.Bt[this] = value; }
        }

        [DisplayName("CT (min)"), Column("CT"), NotMapped]
        public String Ct
        {
            get { return Fields.Ct[this]; }
            set { Fields.Ct[this] = value; }
        }

        [DisplayName("Prothrombin Time (min)"), NotMapped]
        public String ProthrombinTime
        {
            get { return Fields.ProthrombinTime[this]; }
            set { Fields.ProthrombinTime[this] = value; }
        }

        [DisplayName("APTT (min)"), Column("APTT"), NotMapped]
        public String Aptt
        {
            get { return Fields.Aptt[this]; }
            set { Fields.Aptt[this] = value; }
        }

        [DisplayName("Option To Add"), NotMapped]
        public String OptionToAddHematology
        {
            get { return Fields.OptionToAddHematology[this]; }
            set { Fields.OptionToAddHematology[this] = value; }
        }
        [DisplayName("Na (mmol/L)"), NotMapped]
        public String Na
        {
            get { return Fields.Na[this]; }
            set { Fields.Na[this] = value; }
        }
        [DisplayName("K (mmol/L)"), NotMapped]
        public String K
        {
            get { return Fields.K[this]; }
            set { Fields.K[this] = value; }
        }
        [DisplayName("Cl (mmol/L)"), NotMapped]
        public String Cl
        {
            get { return Fields.Cl[this]; }
            set { Fields.Cl[this] = value; }
        }
        [DisplayName("HCO3 (mmol/L)"), NotMapped]
        public String HCO3
        {
            get { return Fields.HCO3[this]; }
            set { Fields.HCO3[this] = value; }
        }
        [DisplayName("CXR"), Column("CXR"), NotMapped]
        public String Cxr
        {
            get { return Fields.Cxr[this]; }
            set { Fields.Cxr[this] = value; }
        }

        [DisplayName("AXR"), Column("AXR"), NotMapped]
        public String Axr
        {
            get { return Fields.Axr[this]; }
            set { Fields.Axr[this] = value; }
        }

        [DisplayName("Xray Kub"), Column("XrayKUB"), NotMapped]
        public String XrayKub
        {
            get { return Fields.XrayKub[this]; }
            set { Fields.XrayKub[this] = value; }
        }

        [DisplayName("USG"), Column("USG"), NotMapped]
        public String Usg
        {
            get { return Fields.Usg[this]; }
            set { Fields.Usg[this] = value; }
        }

        [DisplayName("Ba Enema"), NotMapped]
        public String BaEnema
        {
            get { return Fields.BaEnema[this]; }
            set { Fields.BaEnema[this] = value; }
        }

        [DisplayName("Ba Meal Follow Through"), NotMapped]
        public String BaMealFollowThrough
        {
            get { return Fields.BaMealFollowThrough[this]; }
            set { Fields.BaMealFollowThrough[this] = value; }
        }

        [DisplayName("MCU"), Column("MCU"), NotMapped]
        public String Mcu
        {
            get { return Fields.Mcu[this]; }
            set { Fields.Mcu[this] = value; }
        }

        [DisplayName("RGU"), Column("RGU"), NotMapped]
        public String Rgu
        {
            get { return Fields.Rgu[this]; }
            set { Fields.Rgu[this] = value; }
        }

        [DisplayName("IVU"), Column("IVU"), NotMapped]
        public String Ivu
        {
            get { return Fields.Ivu[this]; }
            set { Fields.Ivu[this] = value; }
        }

        [DisplayName("CT Scan"), Column("CTScan"), NotMapped]
        public String CtScan
        {
            get { return Fields.CtScan[this]; }
            set { Fields.CtScan[this] = value; }
        }

        [DisplayName("MRI"), Column("MRI"), NotMapped]
        public String Mri
        {
            get { return Fields.Mri[this]; }
            set { Fields.Mri[this] = value; }
        }

        [DisplayName("Option To Add"), NotMapped]
        public String OptionToAddImaging
        {
            get { return Fields.OptionToAddImaging[this]; }
            set { Fields.OptionToAddImaging[this] = value; }
        }
        
        [LookupEditor(typeof(OperationRow))]
        [DisplayName("Name of Operation"), ForeignKey("[dbo].[Operation]", "OperationId"), LeftJoin("jOperation"), TextualField("OperationName")]
        public Int32? OperationId
        {
            get { return Fields.OperationId[this]; }
            set { Fields.OperationId[this] = value; }
        }
        [DisplayName("Name of Operation"), NotMapped, Expression("jOperation.[OperationName]")]
        public String OperationName
        {
            get { return Fields.OperationName[this]; }
            set { Fields.OperationName[this] = value; }
        }
        [DisplayName("Operation Date"), NotMapped]
        public DateTime? OperationDate
        {
            get { return Fields.OperationDate[this]; }
            set { Fields.OperationDate[this] = value; }
        }

        [DisplayName("Findings"), NotMapped]
        public String Findings
        {
            get { return Fields.Findings[this]; }
            set { Fields.Findings[this] = value; }
        }

        [DisplayName("Procedures"), NotMapped]
        public String Procedures
        {
            get { return Fields.Procedures[this]; }
            set { Fields.Procedures[this] = value; }
        }
        [DisplayName("Diagnosis"), NotMapped]

        public String Diagnosis
        {
            get { return Fields.Diagnosis[this]; }
            set { Fields.Diagnosis[this] = value; }
        }
        [DisplayName("Indication"), NotMapped]
        public String Indication
        {
            get { return Fields.Indication[this]; }
            set { Fields.Indication[this] = value; }
        }
        [DisplayName("Anesthesia"), NotMapped]
        public String Anesthesia
        {
            get { return Fields.Anesthesia[this]; }
            set { Fields.Anesthesia[this] = value; }
        }
        [DisplayName("Position"), NotMapped]
        public String Position
        {
            get { return Fields.Position[this]; }
            set { Fields.Position[this] = value; }
        }
        [DisplayName("Incision"), NotMapped]
        public String Incision
        {
            get { return Fields.Incision[this]; }
            set { Fields.Incision[this] = value; }
        }
        [DisplayName("Diagram"), NotMapped]
        public String Diagram
        {
            get { return Fields.Diagram[this]; }
            set { Fields.Diagram[this] = value; }
        }
        [DisplayName("Tissue for Histopathology"), NotMapped]
        public String Histopathology
        {
            get { return Fields.Histopathology[this]; }
            set { Fields.Histopathology[this] = value; }
        }
        [DisplayName("Special Note"), NotMapped]
        public String SpecialNote
        {
            get { return Fields.SpecialNote[this]; }
            set { Fields.SpecialNote[this] = value; }
        }
        [DisplayName("Instructions"), NotMapped]
        public String Instructions
        {
            get { return Fields.Instructions[this]; }
            set { Fields.Instructions[this] = value; }
        }
        [DisplayName("Further Plan"), NotMapped]
        public String FurtherPlan
        {
            get { return Fields.FurtherPlan[this]; }
            set { Fields.FurtherPlan[this] = value; }
        }
        [DisplayName("Treatment Continues")]
        public String TreatmentContinues
        {
            get { return Fields.TreatmentContinues[this]; }
            set { Fields.TreatmentContinues[this] = value; }
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
        [NotMapped]        
        [LookupEditor(typeof(MealsRow), InplaceAdd = true)]
        [DisplayName("Meal"), ForeignKey("[dbo].[Meals]", "MealId"), LeftJoin("jMeals"), TextualField("MealName")]
        public Int32? Meal
        {
            get { return Fields.Meal[this]; }
            set { Fields.Meal[this] = value; }
        }
        [DisplayName("Advice")]
        public String Advice
        {
            get { return Fields.Advice[this]; }
            set { Fields.Advice[this] = value; }
        }

        //[DisplayName("Department"), Size(200)]
        //public String Department
        //{
        //    get { return Fields.Department[this]; }
        //    set { Fields.Department[this] = value; }
        //}

        

        IIdField IIdRow.IdField
        {
            get { return Fields.DischargeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DischargeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DischargeId;
            public Int32Field AdmissionId;
            //public Int32Field OperationNoteId;
            public DateTimeField Date;
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

            public StringField Cbc;
            public StringField Creatinine;
            public StringField Urea;
            public StringField Sugar;
            public StringField Albumin;
            public StringField Calcium;           
            public StringField BloodCulture;
            public StringField Crp;
            public StringField Bt;
            public StringField Ct;
            public StringField ProthrombinTime;
            public StringField Aptt;
            public StringField OptionToAddHematology;
            public StringField Na;
            public StringField K;
            public StringField Cl;
            public StringField HCO3;
            public StringField Cxr;
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

            
            public DateTimeField OperationDate;
            public Int32Field OperationId;
            public StringField OperationName;
            public StringField Findings;
            public StringField Procedures;
            public StringField Diagnosis;
            public StringField Indication;
            public StringField Anesthesia;
            public StringField Position;
            public StringField Incision;
            public StringField Diagram;
            public StringField Histopathology;
            public StringField SpecialNote;           
            public StringField Instructions;            
            public StringField FurtherPlan;

            public StringField TreatmentContinues;
            public Int32Field MedicineId;
            public Int32Field DoaseId;
            public Int32Field DurationId;
            public StringField AddtoArea;
            public Int32Field Meal;
            public StringField Advice;
            //public StringField Department;

            
        }
    }
}
