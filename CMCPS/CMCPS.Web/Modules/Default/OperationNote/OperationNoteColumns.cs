
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.OperationNote")]
    [BasedOnRow(typeof(Entities.OperationNoteRow), CheckNames = true)]
    public class OperationNoteColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 Id { get; set; }
        [EditLink]
        [Width(200)]
        public String PatientName { get; set; }
        [Width(200)]
        [DisplayName("Date of Operation")]
        public DateTime Date { get; set; }
        [Width(50)]
        public String Age { get; set; }
        [Width(100)]
        public String Sex { get; set; }
        [DisplayName("Unit"), Width(150)]
        public String UnitNumber { get; set; }
        [Width(150)]
        public String PinNumber { get; set; }
        [Width(150)]
        public String UnitRegNo { get; set; }
        [Width(200)]
        public String HospitalRegNo { get; set; }        
        
        [DisplayName("Diagnosis")]
        public String Diagnosis { get; set; }

        [DisplayName("Anesthesia")]
        public String Anesthesia { get; set; }
        [DisplayName("Name of Operation")]
        public String OperationName { get; set; }
        [DisplayName("Surgeon")]
        public String Surgeon { get; set; }
        [DisplayName("Assistant Surgeon")]
        public String AssistantSurgeon { get; set; }

    }
}