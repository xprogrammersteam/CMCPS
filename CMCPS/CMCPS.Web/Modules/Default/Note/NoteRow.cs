
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Note]")]
    [DisplayName("Note"), InstanceName("Note")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class NoteRow : Row, IIdRow, INameRow
    {
        [DisplayName("Note Id"), Identity]
        public Int32? NoteId
        {
            get { return Fields.NoteId[this]; }
            set { Fields.NoteId[this] = value; }
        }

        [DisplayName("Name of Patient"), Column("AdmissionId"), NotNull]
        [LookupEditor(typeof(Default.Entities.AdmissionRow), InplaceAdd = false)]
        [ForeignKey(typeof(Default.Entities.AdmissionRow), "AdmissionId"), LeftJoin("p", PropertyPrefix = "Name")]
        public Int32? AdmissionId
        {
            get { return Fields.AdmissionId[this]; }
            set { Fields.AdmissionId[this] = value; }
        }

        [Origin("p", "Name"), DisplayName("Name of Patient")]
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
        [DisplayName("Final Diagnosis"), NotMapped]
        public String FinalDiagnosis
        {
            get { return Fields.FinalDiagnosis[this]; }
            set { Fields.FinalDiagnosis[this] = value; }
        }

        [DisplayName("Note"),  ForeignKey("[dbo].[PNote]", "Id"), LeftJoin("jPNote"), TextualField("jPNote.NoteName)")]
        [LookupEditor(typeof(PNoteRow), InplaceAdd = true), NotMapped]
        public Int32? PNoteId
        {
            get { return Fields.PNoteId[this]; }
            set { Fields.PNoteId[this] = value; }
        }

        [NotMapped]
        public string AddtoNote
        {
            get { return Fields.AddtoNote[this]; }
            set { Fields.AddtoNote[this] = value; }
        }
        [DisplayName(""), Size(500), QuickSearch]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }
        public String Doctor
        {
            get { return Fields.Doctor[this]; }
            set { Fields.Doctor[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.NoteId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NoteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field NoteId;
            public Int32Field AdmissionId;
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
            public StringField FinalDiagnosis;
            public Int32Field PNoteId;
            public StringField AddtoNote;
              public StringField Note;
              public StringField Doctor;
        }
    }
}
