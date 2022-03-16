
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

    [Report("Default.FollowUp")]
    [ReportDesign(MVC.Views.Default.FollowUp.FollowUpReport)]
    [RequiredPermission(PermissionKeys.General)]
    public class FollowUpReport : IReport, ICustomizeHtmlToPdf
    {
        public Int32 FollowUpID { get; set; }
       
        public object GetData()
        {
            var data = new FollowUpReportData();

            using (var connection = SqlConnections.NewFor<FollowUpRow>())
            {
                var report = ReportHeadingRow.Fields;
                data.ReportHeadings = connection.TryById<ReportHeadingRow>(1, q => q
                    .SelectTableFields()
                    .Select(report.Id));

                var o = FollowUpRow.Fields;
                data.FollowUp = connection.TryById<FollowUpRow>(this.FollowUpID, q => q
                                   .SelectTableFields() 
                                   
                                   ) ?? new FollowUpRow();
                var AdmissionFields = AdmissionRow.Fields;
                data.Admission = connection.TryById<AdmissionRow>(data.FollowUp.AdmissionId, q => q
                                 .SelectTableFields()
                                 .Select(AdmissionFields.UnitNumber)
                                 .Select(AdmissionFields.BedNumber)
                                 .Select(AdmissionFields.Sex)
                                 .Select(AdmissionFields.BloodGroup)
                                );
               

            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            // options.MarginsAll = "2cm";
        }
    }
    
    public class FollowUpReportData
    {
        public FollowUpRow FollowUp { get; set; }
        public ReportHeadingRow ReportHeadings { get; set; }
        public AdmissionRow Admission { get; set; }  
      

    }
}