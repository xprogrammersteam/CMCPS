
namespace CMCPS.Default
{
    using CMCPS.Default.Entities;
    using CMCPS.Modules.Common.Reporting;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    [Report("Default.OperationNote")]
    [ReportDesign(MVC.Views.Default.OperationNote.OperationNoteReport)]
    [RequiredPermission(PermissionKeys.General)]
    public class OperationNoteReport : IReport, ICustomizeHtmlToPdf
    {
        public Int32 Id { get; set; }
       
        public object GetData()
        {
            var data = new OperationNoteReportData();

            using (var connection = SqlConnections.NewFor<OperationNoteRow>())
            {
                var report = ReportHeadingRow.Fields;
                data.ReportHeadings = connection.TryById<ReportHeadingRow>(1, q => q
                    .SelectTableFields()
                    .Select(report.Id));

                var o = OperationNoteRow.Fields;
                data.Operation = connection.TryById<OperationNoteRow>(this.Id, q => q
                                   .SelectTableFields() 
                                   .Select(o.OperationName)
                                   ) ?? new OperationNoteRow();
                var AdmissionFields = AdmissionRow.Fields;
                data.Admission = connection.TryById<AdmissionRow>(data.Operation.AdmissionId, q => q
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
    
    public class OperationNoteReportData
    {
        public OperationNoteRow Operation { get; set; }
        public ReportHeadingRow ReportHeadings { get; set; }
        public AdmissionRow Admission { get; set; }  
      

    }
}