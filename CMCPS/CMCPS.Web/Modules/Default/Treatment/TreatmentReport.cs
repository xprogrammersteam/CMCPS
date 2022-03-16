

namespace CMCPS.Default.Treatment
{
    using CMCPS.Default.Entities;
    using CMCPS.Modules.Common.Reporting;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;

    [Report("Default.Treatment")]
    [ReportDesign(MVC.Views.Default.Treatment.TreatmentReport)]
    [RequiredPermission(PermissionKeys.General)]
    public class TreatmentReport : IReport, ICustomizeHtmlToPdf
    {
        public Int32 TreatmentId { get; set; }
      

        public object GetData()
        {
            
            var data = new TreatmentReportData();

            using (var connection = SqlConnections.NewFor<TreatmentRow>())
            {
                var report = ReportHeadingRow.Fields;
                data.ReportHeadings = connection.TryById<ReportHeadingRow>(1, q => q
                    .SelectTableFields()
                    .Select(report.Id));

                var o = TreatmentRow.Fields;
                data.Treatment = connection.TryById<TreatmentRow>(this.TreatmentId, q => q
                                   .SelectTableFields()                                   
                                   ) ?? new TreatmentRow();
                var AdmissionFields = AdmissionRow.Fields;
                data.Admission = connection.TryById<AdmissionRow>(data.Treatment.AdmissionId, q => q
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
            
           // throw new System.NotImplementedException();
        }
    }

    public class TreatmentReportData
    {
        public TreatmentRow Treatment { get; set; }
        public ReportHeadingRow ReportHeadings { get; set; }
        public AdmissionRow Admission { get; set; }
        public GetSerialNumber GetSerial { get; set; }

    }
}