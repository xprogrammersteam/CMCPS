

namespace CMCPS.Default.Complication
{
    using CMCPS.Default.Entities;
    using CMCPS.Modules.Common.Reporting;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;

    [Report("Default.Complication")]
    [ReportDesign(MVC.Views.Default.Complication.ComplicationReport)]
    [RequiredPermission(PermissionKeys.General)]
    public class ComplicationReport : IReport, ICustomizeHtmlToPdf
    {
        public Int32 ComplicationId { get; set; }
      

        public object GetData()
        {
            
            var data = new ComplicationReportData();

            using (var connection = SqlConnections.NewFor<ComplicationRow>())
            {
                var report = ReportHeadingRow.Fields;
                data.ReportHeadings = connection.TryById<ReportHeadingRow>(1, q => q
                    .SelectTableFields()
                    .Select(report.Id));

                var o = ComplicationRow.Fields;
                data.Complication = connection.TryById<ComplicationRow>(this.ComplicationId, q => q
                                   .SelectTableFields()
                                   .Select(o.FinalDiagnosis)
                                   ) ?? new ComplicationRow();
                var AdmissionFields = AdmissionRow.Fields;
                data.Admission = connection.TryById<AdmissionRow>(data.Complication.AdmissionId, q => q
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

    public class ComplicationReportData
    {
        public ComplicationRow Complication { get; set; }
        public ReportHeadingRow ReportHeadings { get; set; }
        public AdmissionRow Admission { get; set; }
        public GetSerialNumber GetSerial { get; set; }

    }
}