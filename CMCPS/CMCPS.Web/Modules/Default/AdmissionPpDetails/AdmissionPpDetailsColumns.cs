
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.AdmissionPpDetails")]
    [BasedOnRow(typeof(Entities.AdmissionPpDetailsRow), CheckNames = true)]
    public class AdmissionPpDetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 HistoryId { get; set; }
        public Int32 AdmissionId { get; set; }
        public Int32 ActivityId { get; set; }
        public Int32 SmokingId { get; set; }
        public Int32 AlcoholismId { get; set; }
        public Int32 DrugAddictionId { get; set; }
        public Int32 ExposureHistoryId { get; set; }
    }
}