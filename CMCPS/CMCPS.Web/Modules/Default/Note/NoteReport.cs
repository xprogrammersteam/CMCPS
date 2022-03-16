

namespace CMCPS.Default.Note
{
    using CMCPS.Default.Entities;
    using CMCPS.Modules.Common.Reporting;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;

    [Report("Default.Note")]
    [ReportDesign(MVC.Views.Default.Note.NoteReport)]
    [RequiredPermission(PermissionKeys.General)]
    public class NoteReport : IReport, ICustomizeHtmlToPdf
    {
        public Int32 NoteID { get; set; }
      

        public object GetData()
        {
            
            var data = new NoteReportData();

            using (var connection = SqlConnections.NewFor<NoteRow>())
            {
                var report = ReportHeadingRow.Fields;
                data.ReportHeadings = connection.TryById<ReportHeadingRow>(1, q => q
                    .SelectTableFields()
                    .Select(report.Id));

                var o = NoteRow.Fields;
                data.Note = connection.TryById<NoteRow>(this.NoteID, q => q
                                   .SelectTableFields()                                   
                                   ) ?? new NoteRow();
                var AdmissionFields = AdmissionRow.Fields;
                data.Admission = connection.TryById<AdmissionRow>(data.Note.AdmissionId, q => q
                                 .SelectTableFields()
                                 .Select(AdmissionFields.UnitNumber)
                                 .Select(AdmissionFields.BedNumber)
                                 .Select(AdmissionFields.Sex)
                                 .Select(AdmissionFields.BloodGroup)
                                );
                
                GetSerialNumber get = new GetSerialNumber();
                data.GetSerial = get;

            }

            return data;
        }
        public void Customize(IHtmlToPdfOptions options)
        {
            //throw new System.NotImplementedException();
        }
    }

    public class NoteReportData
    {
        public NoteRow Note { get; set; }
        public ReportHeadingRow ReportHeadings { get; set; }
        public AdmissionRow Admission { get; set; }
        public GetSerialNumber GetSerial { get; set; }

    }
}