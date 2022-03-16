
namespace CMCPS.Default.Opd
{
    using CMCPS.Default.Entities;
    using CMCPS.Modules.Common.Reporting;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    [Report("Default.Opd")]
    [ReportDesign(MVC.Views.Default.Opd.OpdReport)]
    [RequiredPermission(PermissionKeys.General)]
    public class OpdReport : IReport, ICustomizeHtmlToPdf
    {
        public Int32 OpdId { get; set; }
       
        public object GetData()
        {
            var data = new OpdReportData();

            using (var connection = SqlConnections.NewFor<OpdRow>())
            {
                var report = ReportHeadingRow.Fields;
                data.ReportHeadings = connection.TryById<ReportHeadingRow>(1, q => q
                    .SelectTableFields()
                    .Select(report.Id));

                var o = OpdRow.Fields;
                data.Opd = connection.TryById<OpdRow>(this.OpdId, q => q
                                   .SelectTableFields()
                                   .Select(o.Sex)
                                   .Select(o.UniNo)
                                   .Select(o.PatientType)
                                   .Select(o.UpazilaName)
                                   .Select(o.DistrictName)
                                   ) ?? new OpdRow();
                var diagnosis = OpdWithDiagnosisDetailsRow.Fields;
                data.DaignosisDetails = connection.List<OpdWithDiagnosisDetailsRow>(q => q
                    .SelectTableFields()
                    .Select(diagnosis.Diagnosis)
                    .Where(diagnosis.OpdId == this.OpdId));
                //var AdmissionFields = AdmissionRow.Fields;
                //data.Admission = connection.TryById<AdmissionRow>(data.FollowUp.AdmissionId, q => q
                //                 .SelectTableFields()
                //                 .Select(AdmissionFields.UnitNumber)
                //                 .Select(AdmissionFields.BedNumber)
                //                );


            }
            GetSerialNumber get = new GetSerialNumber();
            data.GetSerial = get;
            
            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            // options.MarginsAll = "2cm";
            //options.MarginsAll = "2cm";
            //options.Landscape = true;
           // options.PageSize = "A";
        }
    }
    
    public class OpdReportData
    {
        public OpdRow Opd { get; set; }
        public ReportHeadingRow ReportHeadings { get; set; }
        //public AdmissionRow Admission { get; set; } 
        public List<OpdWithDiagnosisDetailsRow> DaignosisDetails { get; set; }
        public GetSerialNumber GetSerial { get; set; }

    }
}