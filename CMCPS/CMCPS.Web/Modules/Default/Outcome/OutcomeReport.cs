

namespace CMCPS.Default.Outcome
{
    using CMCPS.Default.Entities;
    using CMCPS.Modules.Common.Reporting;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;

    [Report("Default.Outcome")]
    [ReportDesign(MVC.Views.Default.Outcome.OutcomeReport)]
    [RequiredPermission(PermissionKeys.General)]
    public class OutcomeReport : IReport, ICustomizeHtmlToPdf
    {
        public Int32 OutcomeID { get; set; }
      

        public object GetData()
        {
            
            var data = new OutcomeReportData();

            using (var connection = SqlConnections.NewFor<TreatmentRow>())
            {
                var report = ReportHeadingRow.Fields;
                data.ReportHeadings = connection.TryById<ReportHeadingRow>(1, q => q
                    .SelectTableFields()
                    .Select(report.Id));

                var o = OutcomeRow.Fields;
                data.Outcome = connection.TryById<OutcomeRow>(this.OutcomeID, q => q
                                   .SelectTableFields()                                   
                                   ) ?? new OutcomeRow();
                var AdmissionFields = AdmissionRow.Fields;
                data.Admission = connection.TryById<AdmissionRow>(data.Outcome.AdmissionId, q => q
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

    public class OutcomeReportData
    {
        public OutcomeRow Outcome { get; set; }
        public ReportHeadingRow ReportHeadings { get; set; }
        public AdmissionRow Admission { get; set; }
        public GetSerialNumber GetSerial { get; set; }

    }
}