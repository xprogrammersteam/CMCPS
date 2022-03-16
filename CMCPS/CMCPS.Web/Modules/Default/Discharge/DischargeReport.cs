

namespace CMCPS.Default.Discharge
{
    using CMCPS.Default.Entities;
    using CMCPS.Modules.Common.Reporting;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;

    [Report("Default.Discharge")]
    [ReportDesign(MVC.Views.Default.Discharge.DischargeReport)]
    [RequiredPermission(PermissionKeys.General)]
    public class DischargeReport : IReport, ICustomizeHtmlToPdf
    {
        public Int32 DischargeID { get; set; }
      

        public object GetData()
        {
            
            var data = new DischargeReportData();

            using (var connection = SqlConnections.NewFor<DischargeRow>())
            {
                var report = ReportHeadingRow.Fields;
                data.ReportHeadings = connection.TryById<ReportHeadingRow>(1, q => q
                    .SelectTableFields()
                    .Select(report.Id));

                var o = DischargeRow.Fields;
                data.Discharge = connection.TryById<DischargeRow>(this.DischargeID, q => q
                                   .SelectTableFields()                                   
                                   ) ?? new DischargeRow();
                var AdmissionFields = AdmissionRow.Fields;
                data.Admission = connection.TryById<AdmissionRow>(data.Discharge.AdmissionId, q => q
                                 .SelectTableFields()
                                 .Select(AdmissionFields.UnitNumber)
                                 .Select(AdmissionFields.BedNumber)
                                 .Select(AdmissionFields.Sex)
                                 .Select(AdmissionFields.Ward)
                                 .Select(AdmissionFields.BloodGroup)
                                 .Select(AdmissionFields.DistrictName)
                                 .Select(AdmissionFields.UpazilaName)
                                 .Select(AdmissionFields.Doctor)
                                );
                var od = InvestigationRow.Fields;
                data.InvestigationList = connection.List<InvestigationRow>(q => q
                      .SelectTableFields()
                      .Where(o.AdmissionId == Convert.ToInt32(data.Discharge.AdmissionId)));
                InvestigationRow investigation = new InvestigationRow();
                
                foreach (var item in data.InvestigationList)
                {
                    investigation.Cbc = item.Cbc;
                    investigation.Creatinine = item.Creatinine;
                    investigation.Urea = item.Urea;
                    investigation.Sugar = item.Sugar;
                    investigation.Albumin = item.Albumin;
                    investigation.Calcium = item.Calcium;
                    investigation.BloodCulture = item.BloodCulture;
                    investigation.Crp = item.Crp;
                    investigation.Bt = item.Bt;
                    investigation.Ct = item.Ct;
                    investigation.ProthrombinTime = item.ProthrombinTime;
                    investigation.Aptt = item.Aptt;
                    investigation.OptionToAddHematology = item.OptionToAddHematology;
                    investigation.Na = item.Na;
                    investigation.K = item.K;
                    investigation.Cl = item.Cl;
                    investigation.HCO3 = item.HCO3;
                    investigation.Cxr = item.Cxr;
                    investigation.Axr = item.Axr;
                    investigation.XrayKub = item.XrayKub;
                    investigation.Usg = item.Usg;
                    investigation.BaEnema = item.BaEnema;
                    investigation.BaMealFollowThrough = item.BaMealFollowThrough;
                    investigation.Mcu = item.Mcu;
                    investigation.Rgu = item.Rgu;
                    investigation.Ivu = item.Ivu;
                    investigation.CtScan = item.CtScan;
                    investigation.Mri = item.Mri;
                    investigation.OptionToAddImaging = item.OptionToAddImaging;

                }


                data.Investigation = investigation;

                var treatment = TreatmentRow.Fields;
                data.TreatmentList = connection.List<TreatmentRow>(q => q
                     .SelectTableFields()
                     .Where(o.AdmissionId == Convert.ToInt32(data.Discharge.AdmissionId)));
                TreatmentRow objTreatment = new TreatmentRow();
                foreach (var item in data.TreatmentList)
                {
                    objTreatment.Treatment = item.Treatment;
                }
                data.Treatment = objTreatment;

                var op = OperationNoteRow.Fields;

                data.Operation = connection.TryById<OperationNoteRow>(data.Admission.OperationNoteId, q => q
                                .SelectTableFields()
                                .Select(op.OperationName)                                
                               );

                //data.OperationList = connection.List<OperationNoteRow>(q => q
                //     .SelectTableFields()
                //     .Select(op.OperationName)
                //     .Where(o.AdmissionId == Convert.ToInt32(data.Discharge.AdmissionId)));
                //OperationNoteRow objOperation = new OperationNoteRow();
                //foreach (var item in data.OperationList)
                //{
                //    objOperation.OperationName = item.OperationName;
                //    objOperation.Date = item.Date;
                //    objOperation.Findings = item.Findings;
                //    objOperation.Procedures = item.Procedures;
                //    objOperation.Indication = item.Indication;
                //    objOperation.Diagnosis = item.Diagnosis;
                //    objOperation.Anesthesia = item.Anesthesia;
                //    objOperation.Position = item.Position;
                //    objOperation.Incision = item.Incision;
                //    objOperation.Histopathology = item.Histopathology;
                //    objOperation.SpecialNote = item.SpecialNote;
                //    objOperation.Instructions = item.Instructions;
                //    objOperation.FurtherPlan = item.FurtherPlan;
                //}
                //data.Operation = objOperation;
                GetSerialNumber get = new GetSerialNumber();
                data.GetSerial = get;

            }

            return data;
        }
        public void Customize(IHtmlToPdfOptions options)
        {
            options.Landscape = true;
            
        }
    }

    public class DischargeReportData
    {
        public InvestigationRow Investigation { get; set; }
        public DischargeRow Discharge { get; set; }
        public List<InvestigationRow> InvestigationList { get; set; }

        public OperationNoteRow Operation { get; set; }
        //public List<OperationNoteRow> OperationList { get; set; }
        public TreatmentRow Treatment { get; set; }
        public List<TreatmentRow> TreatmentList { get; set; }
        public ReportHeadingRow ReportHeadings { get; set; }
        public AdmissionRow Admission { get; set; }
        public GetSerialNumber GetSerial { get; set; }

    }
}