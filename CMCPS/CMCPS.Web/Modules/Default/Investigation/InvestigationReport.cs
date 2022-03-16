
namespace CMCPS.Default.Investigation
{
    using CMCPS.Default.Entities;
    using CMCPS.Modules.Common.Reporting;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    [Report("Default.Investigation")]
    [ReportDesign(MVC.Views.Default.Investigation.InvestigationReport)]
    [RequiredPermission(PermissionKeys.General)]
    public class InvestigationReport : IReport, ICustomizeHtmlToPdf
    {
        public Int32 InvestigationID { get; set; }
       
        public object GetData()
        {
            var data = new InvestigationReportData();

            using (var connection = SqlConnections.NewFor<InvestigationRow>())
            {
                var report = ReportHeadingRow.Fields;
                data.ReportHeadings = connection.TryById<ReportHeadingRow>(1, q => q
                    .SelectTableFields()
                    .Select(report.Id));

                var o = InvestigationRow.Fields;
                data.Investigation = connection.TryById<InvestigationRow>(this.InvestigationID, q => q
                                   .SelectTableFields()
                                   .Select(o.Calcium)
                                   ) ?? new InvestigationRow();
                var AdmissionFields = AdmissionRow.Fields;
                data.Admission = connection.TryById<AdmissionRow>(data.Investigation.AdmissionId, q => q
                                 .SelectTableFields()
                                 .Select(AdmissionFields.UnitNumber)
                                 .Select(AdmissionFields.BedNumber)
                                 .Select(AdmissionFields.Sex)
                                 .Select(AdmissionFields.BloodGroup)
                                );
                var od = OtherLabWithInvestigationRow.Fields;
                data.OtherLab = connection.List<OtherLabWithInvestigationRow>(q => q
                    .SelectTableFields()
                    .Select(od.OtherLabName)
                    .Where(od.InvestigationId == this.InvestigationID));

                var odI = PathologyAndInvestigationDetailsRow.Fields;
                data.Patheloy = connection.List<PathologyAndInvestigationDetailsRow>(q => q
                    .SelectTableFields()
                    .Select(odI.PathologyName)
                    .Where(odI.InvestigationId == this.InvestigationID));
                GetSerialNumber get = new GetSerialNumber();
                data.GetSerial = get;

            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            // options.MarginsAll = "2cm";
        }
    }
    
    public class InvestigationReportData
    {
        public InvestigationRow Investigation { get; set; }
        public ReportHeadingRow ReportHeadings { get; set; }
        public AdmissionRow Admission { get; set; }  
        public List<OtherLabWithInvestigationRow> OtherLab { get; set; }
        public List<PathologyAndInvestigationDetailsRow> Patheloy { get; set; }
        public GetSerialNumber GetSerial { get; set; }

    }
}