
using System.Data;
using System.Linq;
using CMCPS.Default.Entities;
using CMCPS.Modules.Common.Reporting;
using CMCPS.Modules.Default.Admission;
using CMCPS.Modules.Default.History;

namespace CMCPS.Default
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;

    [Report("Default.Admission")]
    [ReportDesign(MVC.Views.Default.Admission.AdmissionDetailReport)]
    [RequiredPermission(PermissionKeys.General)]
    public class AdmissionDetailReport : IReport, ICustomizeHtmlToPdf
    {
        public Int32 AdmissionID { get; set; }

        public object GetData()
        {
            var data = new AdmissionDetailReportData();

            using (var connection = SqlConnections.NewFor<AdmissionRow>())
            {
                var report = ReportHeadingRow.Fields;
                data.ReportHeadings = connection.TryById<ReportHeadingRow>(1, q => q
                    .SelectTableFields()
                    .Select(report.Id));

                var o = AdmissionRow.Fields;

                data.Admission = connection.TryById<AdmissionRow>(this.AdmissionID, q => q
                                     .SelectTableFields()
                                     .Select(o.Sex)
                                     .Select(o.Religion)
                                     .Select(o.UnitNumber)
                                     .Select(o.BedNumber)
                                     .Select(o.Name)
                                     .Select(o.UpazilaName)
                                     .Select(o.DistrictName)
                                     .Select(o.Consanguinity)
                                     .Select(o.FamilyHistory)
                                     .Select(o.Anaemia)
                                     .Select(o.Dehydration)
                                     .Select(o.Oedema)
                                     .Select(o.Jaundice)
                                     .Select(o.BloodGroup)
                                     .Select(o.Ward)
                                     ) ?? new AdmissionRow();

                var od = AdmissionCcDetailsRow.Fields;
                data.PrComplaintsDetails = connection.List<AdmissionCcDetailsRow>(q => q
                    .SelectTableFields()
                    .Select(od.PComplaints)
                    .Where(od.AdmissionId == this.AdmissionID));

                var diagnosis = DDiagnosisDetailsRow.Fields;
                data.DaignosisDetails = connection.List<DDiagnosisDetailsRow>(q => q
                    .SelectTableFields()
                    .Select(diagnosis.Diagnosis)
                    .Where(diagnosis.AdmissionId == this.AdmissionID));

                var Antenatal = connection.Query("SELECT AntenatalId,Antenatal_Name FROM  AntenatalHistoryView Where AdmissionId='" + AdmissionID + "'").ToList();
                string anteNatalName = "";
                foreach (var item in Antenatal)
                {
                    if (anteNatalName == "")
                    {
                        anteNatalName = item.Antenatal_Name;
                    }
                    else
                    {
                        anteNatalName = anteNatalName + ", " + item.Antenatal_Name;
                    }

                }
                AnteNatal objAntenatal = new AnteNatal();
                objAntenatal.Antenatal_Name = anteNatalName;
                data.AnteNatals = objAntenatal;

                var natal = connection.Query("SELECT NatalId, NatalName FROM NatalHistoryView Where AdmissionId='" + AdmissionID + "'").ToList();
                string natalName = "";
                foreach (var dr in natal)
                {
                    if (natalName == "")
                    {
                        natalName = dr.NatalName;
                    }
                    else
                    {
                        natalName = natalName + ", " + dr.NatalName;
                    }

                }
                Natal objnatal = new Natal();
                objnatal.NatalName = natalName;
                data.Natals = objnatal;

                var postNatal = connection.Query("SELECT  PostNatalId, PostNatalName, AdmissionId FROM PostNatalHistoryView Where AdmissionId='" + AdmissionID + "'").ToList();
                string postNatalName = "";
                foreach (var dr in postNatal)
                {
                    if (postNatalName == "")
                    {
                        postNatalName = dr.PostNatalName;
                    }
                    else
                    {
                        postNatalName = postNatalName + ", " + dr.PostNatalName;
                    }

                }
                PostNatal objPostNatal = new PostNatal();
                objPostNatal.PostNatalName = postNatalName;
                data.PostNatals = objPostNatal;
            }
            GetSerialNumber get = new GetSerialNumber();
            data.GetSerial = get;
            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            // options.MarginsAll = "2cm";
        }
    }

    public class AnteNatal
    {
        public string Antenatal_Name { get; set; }
    }
    public class Natal
    {
        public string NatalName { get; set; }
    }
    public class PostNatal
    {
        public string PostNatalName { get; set; }
    }


    public class AdmissionDetailReportData
    {
        public ReportHeadingRow ReportHeadings { get; set; }
        public AdmissionRow Admission { get; set; }
        public List<AdmissionCcDetailsRow> PrComplaintsDetails { get; set; }
        public List<DDiagnosisDetailsRow> DaignosisDetails { get; set; }
        //public List<AntenatalRow> AntenatalDetails { get; set; }
        public AnteNatal AnteNatals { get; set; }
        public Natal Natals { get; set; }
        public PostNatal PostNatals { get; set; }

        public GetSerialNumber GetSerial { get; set; }
    }
}