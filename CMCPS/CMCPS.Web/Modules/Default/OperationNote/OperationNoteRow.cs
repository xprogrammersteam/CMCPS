
namespace CMCPS.Default.Entities
{
    using CMCPS.Modules.Default.Admission;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[OperationNote]")]
    [DisplayName("Operation Note"), InstanceName("Operation Note")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(typeof(Scripts.OperationLookup))]
    public sealed class OperationNoteRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,LookupInclude]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Patient Name"), Column("AdmissionId"), NotNull, QuickSearch]
        [LookupEditor(typeof(Default.Entities.AdmissionRow), InplaceAdd = false), QuickFilter(true)]
        [ForeignKey(typeof(Default.Entities.AdmissionRow), "AdmissionId"), LeftJoin("p", PropertyPrefix = "Name")]
        public Int32? AdmissionId
        {
            get { return Fields.AdmissionId[this]; }
            set { Fields.AdmissionId[this] = value; }
        }

        [Origin("p", "Name"), DisplayName("Patient Name")]
        public String PatientName
        {
            get { return Fields.PatientName[this]; }
            set { Fields.PatientName[this] = value; }
        }
        [DisplayName("Operation Date")]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Admission Date"), NotMapped]
        public DateTime? AdmissionDate
        {
            get { return Fields.AdmissionDate[this]; }
            set { Fields.AdmissionDate[this] = value; }
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
        [DisplayName("PIN Number"), Origin("p", "PinNumber")]
        public String PinNumber
        {
            get { return Fields.PinNumber[this]; }
            set { Fields.PinNumber[this] = value; }
        }
        [DisplayName("")]
        public String Doctor
        {
            get { return Fields.Doctor[this]; }
            set { Fields.Doctor[this] = value; }
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
        [DisplayName("Type")]
        public OperationType? Type
        {
            get { return (OperationType?)Fields.Type[this]; }
            set { Fields.Type[this] = (Int32?)value; }
        }
       

        [DisplayName("Start Time")]
        public TimeSpan? StartTime
        {
            get { return Fields.StartTime[this]; }
            set { Fields.StartTime[this] = value; }
        }

        [DisplayName("End Time")]
        public TimeSpan? EndTime
        {
            get { return Fields.EndTime[this]; }
            set { Fields.EndTime[this] = value; }
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
        [DisplayName("Is View")]
        public Boolean? IsView
        {
            get { return Fields.IsView[this]; }
            set { Fields.IsView[this] = value; }
        }
        [LookupEditor(typeof(DiagnosisRow), InplaceAdd = true)]
        [DisplayName("Diagnosis"), NotMapped, ForeignKey("[dbo].[Diagnosis]", "DiagnosisId"), LeftJoin("jDiagnosis"), TextualField("DiagnosisName")]
        public Int32? DiagnosisId
        {
            get { return Fields.DiagnosisId[this]; }
            set { Fields.DiagnosisId[this] = value; }
        }

        [DisplayName("Diagnosis"), Expression("jDiagnosis.[DiagnosisName]")]
        public String DiagnosisName
        {
            get { return Fields.DiagnosisName[this]; }
            set { Fields.DiagnosisName[this] = value; }
        }
        [NotMapped]
        public String AddtoDiagnosis
        {
            get { return Fields.AddtoDiagnosis[this]; }
            set { Fields.AddtoDiagnosis[this] = value; }
        }
        [DisplayName(""), QuickSearch]

        public String Diagnosis
        {
            get { return Fields.Diagnosis[this]; }
            set { Fields.Diagnosis[this] = value; }
        }
        [LookupEditor(typeof(IndicationRow), InplaceAdd = true)]
        [DisplayName("Indication"), NotMapped, ForeignKey("[dbo].[Indication]", "IndicationId"), LeftJoin("jIndication"), TextualField("IndicationName")]
        public Int32? IndicationId
        {
            get { return Fields.IndicationId[this]; }
            set { Fields.IndicationId[this] = value; }
        }
        [DisplayName("Indication"), Expression("jIndication.[IndicationName]")]
        public String IndicationName
        {
            get { return Fields.IndicationName[this]; }
            set { Fields.IndicationName[this] = value; }
        }
        [NotMapped]
        public String AddtoIndication
        {
            get { return Fields.AddtoIndication[this]; }
            set { Fields.AddtoIndication[this] = value; }
        }
        [DisplayName("")]
        public String Indication
        {
            get { return Fields.Indication[this]; }
            set { Fields.Indication[this] = value; }
        }
        [LookupEditor(typeof(AnesthesiaRow), InplaceAdd = true)]
        [DisplayName("Anesthesia"), NotMapped, ForeignKey("[dbo].[Anesthesia]", "AnesthesiaId"), LeftJoin("jAnesthesia"), TextualField("AnesthesiaName")]
        public Int32? AnesthesiaId
        {
            get { return Fields.AnesthesiaId[this]; }
            set { Fields.AnesthesiaId[this] = value; }
        }
        [DisplayName("Anesthesia"), Expression("jAnesthesia.[AnesthesiaName]")]
        public String AnesthesiaName
        {
            get { return Fields.AnesthesiaName[this]; }
            set { Fields.AnesthesiaName[this] = value; }
        }
        [NotMapped]
        public String AddtoAnesthesia
        {
            get { return Fields.AddtoAnesthesia[this]; }
            set { Fields.AddtoAnesthesia[this] = value; }
        }
        [DisplayName("")]
        public String Anesthesia
        {
            get { return Fields.Anesthesia[this]; }
            set { Fields.Anesthesia[this] = value; }
        }
        [LookupEditor(typeof(PositionRow), InplaceAdd = true)]
        [DisplayName("Position"), NotMapped, ForeignKey("[dbo].[Position]", "PositionId"), LeftJoin("jPosition"), TextualField("PositionName")]
        public Int32? PositionId
        {
            get { return Fields.PositionId[this]; }
            set { Fields.PositionId[this] = value; }
        }
        [DisplayName("Position"), Expression("jPosition.[PositionName]")]
        public String PositionName
        {
            get { return Fields.PositionName[this]; }
            set { Fields.PositionName[this] = value; }
        }
        [NotMapped]
        public String AddtoPosition
        {
            get { return Fields.AddtoPosition[this]; }
            set { Fields.AddtoPosition[this] = value; }
        }
        [DisplayName("")]
        public String Position
        {
            get { return Fields.Position[this]; }
            set { Fields.Position[this] = value; }
        }
        [LookupEditor(typeof(IncisionRow), InplaceAdd = true)]
        [DisplayName("Incision"), NotMapped, ForeignKey("[dbo].[Incision]", "IncisionId"), LeftJoin("jIncision"), TextualField("IncisionName")]
        public Int32? IncisionId
        {
            get { return Fields.IncisionId[this]; }
            set { Fields.IncisionId[this] = value; }
        }
        [DisplayName("Incision"), Expression("jIncision.[IncisionName]")]
        public String IncisionName
        {
            get { return Fields.IncisionName[this]; }
            set { Fields.IncisionName[this] = value; }
        }
        [NotMapped]
        public String AddtoIncision
        {
            get { return Fields.AddtoIncision[this]; }
            set { Fields.AddtoIncision[this] = value; }
        }
        [DisplayName("")]
        public String Incision
        {
            get { return Fields.Incision[this]; }
            set { Fields.Incision[this] = value; }
        }
       
        [DisplayName("Diagram")]
        [ImageUploadEditor(FilenameFormat = "OperationNoteImage/~", CopyToHistory = true)]
        public String Diagram
        {
            get { return Fields.Diagram[this]; }
            set { Fields.Diagram[this] = value; }
        }
        [LookupEditor(typeof(OperationRow), InplaceAdd = true)]
        [DisplayName("Name of Operation"), NotNull, ForeignKey("[dbo].[Operation]", "OperationId"), LeftJoin("jOperation"), TextualField("OperationName"),LookupInclude]
        public Int32? OperationId
        {
            get { return Fields.OperationId[this]; }
            set { Fields.OperationId[this] = value; }
        }
        [DisplayName("Name of Operation"), Expression("jOperation.[OperationName]"),LookupInclude]
        public String OperationName
        {
            get { return Fields.OperationName[this]; }
            set { Fields.OperationName[this] = value; }
        }
       
        [DisplayName("Findings")]
        public String Findings
        {
            get { return Fields.Findings[this]; }
            set { Fields.Findings[this] = value; }
        }

        [DisplayName("Procedures")]
        public String Procedures
        {
            get { return Fields.Procedures[this]; }
            set { Fields.Procedures[this] = value; }
        }
        [LookupEditor(typeof(HistopathologyRow), InplaceAdd = true)]
        [DisplayName("Tissue for Histopathology"), NotMapped, ForeignKey("[dbo].[Histopathology]", "HistopathologyId"), LeftJoin("jHistopathology"), TextualField("HistopathologyName")]
        public Int32? HistopathologyId
        {
            get { return Fields.HistopathologyId[this]; }
            set { Fields.HistopathologyId[this] = value; }
        }
        [NotMapped]
        public String AddtoHistopathology
        {
            get { return Fields.AddtoHistopathology[this]; }
            set { Fields.AddtoHistopathology[this] = value; }
        }
        [DisplayName("")]
        public String Histopathology
        {
            get { return Fields.Histopathology[this]; }
            set { Fields.Histopathology[this] = value; }
        }
        [LookupEditor(typeof(SpecialNoteRow), InplaceAdd = true)]
        [DisplayName("Special Note"), NotMapped, ForeignKey("[dbo].[SpecialNote]", "SpecialNoteId"), LeftJoin("jSpecialNote"), TextualField("SpecialNoteName")]
        public Int32? SpecialNoteId
        {
            get { return Fields.SpecialNoteId[this]; }
            set { Fields.SpecialNoteId[this] = value; }
        }
        [NotMapped]
        public String AddtoSpecialNote
        {
            get { return Fields.AddtoSpecialNote[this]; }
            set { Fields.AddtoSpecialNote[this] = value; }
        }
        [DisplayName("")]
        public String SpecialNote
        {
            get { return Fields.SpecialNote[this]; }
            set { Fields.SpecialNote[this] = value; }
        }
        [LookupEditor(typeof(InstructionsRow), InplaceAdd = true)]
        [DisplayName("Instructions"), NotMapped, ForeignKey("[dbo].[Instructions]", "InstructionsId"), LeftJoin("jInstructions"), TextualField("InstructionsName")]
        public Int32? InstructionsId
        {
            get { return Fields.InstructionsId[this]; }
            set { Fields.InstructionsId[this] = value; }
        }
        [NotMapped]
        public String AddtoInstructions
        {
            get { return Fields.AddtoInstructions[this]; }
            set { Fields.AddtoInstructions[this] = value; }
        }
        [DisplayName("")]
        public String Instructions
        {
            get { return Fields.Instructions[this]; }
            set { Fields.Instructions[this] = value; }
        }
        [LookupEditor(typeof(FurtherPlanRow), InplaceAdd = true)]
        [DisplayName("Further Plan"), NotMapped, ForeignKey("[dbo].[FurtherPlan]", "FurtherPlanId"), LeftJoin("jFurtherPlan"), TextualField("FurtherPlanName")]
        public Int32? FurtherPlanId
        {
            get { return Fields.FurtherPlanId[this]; }
            set { Fields.FurtherPlanId[this] = value; }
        }
        [NotMapped]
        public String AddtoFurtherPlan
        {
            get { return Fields.AddtoFurtherPlan[this]; }
            set { Fields.AddtoFurtherPlan[this] = value; }
        }
        [DisplayName("")]
        public String FurtherPlan
        {
            get { return Fields.FurtherPlan[this]; }
            set { Fields.FurtherPlan[this] = value; }
        }
        [LookupEditor(typeof(SurgeonRow), InplaceAdd = true)]
        [DisplayName("Surgeon"), NotMapped, ForeignKey("[dbo].[Surgeon]", "SurgeonId"), LeftJoin("jSurgeon"), TextualField("SurgeonName")]
        public Int32? SurgeonId
        {
            get { return Fields.SurgeonId[this]; }
            set { Fields.SurgeonId[this] = value; }
        }
        [NotMapped]
        public String AddtoSurgeon
        {
            get { return Fields.AddtoSurgeon[this]; }
            set { Fields.AddtoSurgeon[this] = value; }
        }
        [DisplayName("")]
        public String Surgeon
        {
            get { return Fields.Surgeon[this]; }
            set { Fields.Surgeon[this] = value; }
        }
        [LookupEditor(typeof(AssistantSurgeonRow), InplaceAdd = true)]
        [DisplayName("Assistant Surgeon"), NotMapped, ForeignKey("[dbo].[AssistantSurgeon]", "AssistantSurgeonId"), LeftJoin("jAssistantSurgeon"), TextualField("AssistantSurgeonName")]
        public Int32? AssistantSurgeonId
        {
            get { return Fields.SurgeonId[this]; }
            set { Fields.SurgeonId[this] = value; }
        }
        [NotMapped]
        public String AddtoAssistantSurgeon
        {
            get { return Fields.AddtoAssistantSurgeon[this]; }
            set { Fields.AddtoAssistantSurgeon[this] = value; }
        }
        [DisplayName("")]
        public String AssistantSurgeon
        {
            get { return Fields.AssistantSurgeon[this]; }
            set { Fields.AssistantSurgeon[this] = value; }
        }
        [LookupEditor(typeof(AnesthetistRow), InplaceAdd = true)]
        [DisplayName("Anesthetist"), NotMapped, ForeignKey("[dbo].[Anesthetist]", "AnesthetistId"), LeftJoin("jAnesthetist"), TextualField("AnesthetistName")]
        public Int32? AnesthetistId
        {
            get { return Fields.AnesthetistId[this]; }
            set { Fields.AnesthetistId[this] = value; }
        }
        [NotMapped]
        public String AddtoAnesthetist
        {
            get { return Fields.AddtoAnesthetist[this]; }
            set { Fields.AddtoAnesthetist[this] = value; }
        }
        [DisplayName("")]
        public String Anesthetist
        {
            get { return Fields.Anesthetist[this]; }
            set { Fields.Anesthetist[this] = value; }
        }
        [LookupEditor(typeof(OtSisterRow), InplaceAdd = true)]
        [DisplayName("OT Sister"), NotMapped, ForeignKey("[dbo].[OtSister]", "OtSisterId"), LeftJoin("jOtSister"), TextualField("OtSisterName")]
        public Int32? OtSisterId
        {
            get { return Fields.OtSisterId[this]; }
            set { Fields.OtSisterId[this] = value; }
        }
        [NotMapped]
        public String AddtoOtSister
        {
            get { return Fields.AddtoOtSister[this]; }
            set { Fields.AddtoOtSister[this] = value; }
        }
        [DisplayName("")]
        public String OtSister
        {
            get { return Fields.OtSister[this]; }
            set { Fields.OtSister[this] = value; }
        }
        [LookupEditor(typeof(OtAttendantRow), InplaceAdd = true)]
        [DisplayName("OT Attendant"), NotMapped, ForeignKey("[dbo].[OtAttendant]", "OtAttendantId"), LeftJoin("jOtAttendant"), TextualField("OtAttendantName")]
        public Int32? OtAttendantId
        {
            get { return Fields.OtAttendantId[this]; }
            set { Fields.OtAttendantId[this] = value; }
        }
        [NotMapped]
        public String AddtoOtAttendant
        {
            get { return Fields.AddtoOtAttendant[this]; }
            set { Fields.AddtoOtAttendant[this] = value; }
        }
        [DisplayName("")]
        
        public String OtAttendant
        {
            get { return Fields.OtAttendant[this]; }
            set { Fields.OtAttendant[this] = value; }
        }

        [DisplayName("OT Note Image"), Size(500)]
        [ImageUploadEditor(FilenameFormat = "OperationNoteImage/~", CopyToHistory = true)]
        public String PhotoUrl
        {
            get { return Fields.PhotoUrl[this]; }
            set { Fields.PhotoUrl[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PatientName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OperationNoteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field AdmissionId;
            public DateTimeField Date;
            public StringField Age;
            public StringField PinNumber;
            public Int32Field UnitId;
            public StringField UnitNumber;
            public StringField UnitRegNo;
            public StringField BedNumber;
            public StringField HospitalRegNo;
            public DateTimeField AdmissionDate;
            public StringField PatientName;
            public Int32Field SexId;
            public StringField Sex;
            public StringField Weight;
            public StringField BloodGroup;
            public Int32Field Type;
            public TimeSpanField StartTime;
            public TimeSpanField EndTime;
            public Int32Field DiagnosisId;
            public StringField AddtoDiagnosis;
            public StringField DiagnosisName;
            public StringField Diagnosis;
            public BooleanField IsView;
            public Int32Field IndicationId;
            public StringField AddtoIndication;
            public StringField IndicationName;
            public StringField Indication;
            public Int32Field AnesthesiaId;           
            public StringField AddtoAnesthesia;
            public StringField AnesthesiaName;
            public StringField Anesthesia;
            public Int32Field PositionId;
            public StringField AddtoPosition;
            public StringField PositionName;
            public StringField Position;
            public Int32Field IncisionId;
            public StringField AddtoIncision;
            public StringField IncisionName;
            public StringField Incision;
            //public Int32Field DiagramId;
            //public StringField AddtoDiagram;
            //public StringField DiagramName;
            public StringField Doctor;
            public StringField Diagram;
            public Int32Field OperationId;
            public StringField OperationName;
            public StringField Findings;
            public StringField Procedures;
            public Int32Field HistopathologyId;
            public StringField AddtoHistopathology;
            public StringField Histopathology;
            public Int32Field SpecialNoteId;
            public StringField AddtoSpecialNote;
            public StringField SpecialNote;
            public Int32Field InstructionsId;
            public StringField AddtoInstructions;
            public StringField Instructions;
            public Int32Field FurtherPlanId;
            public StringField AddtoFurtherPlan;
            public StringField FurtherPlan;
            public Int32Field SurgeonId;
            public StringField AddtoSurgeon;
            public StringField Surgeon;
            public Int32Field AssistantSurgeonId;
            public StringField AddtoAssistantSurgeon;
            public StringField AssistantSurgeon;
            public Int32Field AnesthetistId;
            public StringField AddtoAnesthetist;
            public StringField Anesthetist;
            public Int32Field OtSisterId;
            public StringField AddtoOtSister;
            public StringField OtSister;
            public Int32Field OtAttendantId;
            public StringField AddtoOtAttendant;
            public StringField OtAttendant;
            public StringField PhotoUrl;
        }
    }
}
