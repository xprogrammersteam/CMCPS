namespace CMCPS.Default {
    export interface FollowUpRow {
        FollowUpId?: number;
        AdmissionId?: number;
        Age?: string;
        UnitId?: number;
        SexId?: number;
        Sex?: string;
        PinNumber?: string;
        UnitNumber?: string;
        UnitRegNo?: string;
        BedNumber?: string;
        HospitalRegNo?: string;
        Weight?: number;
        BloodGroup?: string;
        Doctor?: string;
        AddtoDiagnosis?: string;
        AddtoComplaint?: string;
        AdmissionDate?: string;
        ChiefComplaintId?: number;
        DiagnosisId?: number;
        DiagnosisName?: string;
        Diagnosis?: string;
        PComplaints?: string;
        PatientName?: string;
        ChiefComplaint?: string;
        Exam?: string;
        Advice?: string;
        Note?: string;
        Plan?: string;
        Date?: string;
    }

    export namespace FollowUpRow {
        export const idProperty = 'FollowUpId';
        export const nameProperty = 'PatientName';
        export const localTextPrefix = 'Default.FollowUp';

        export declare const enum Fields {
            FollowUpId = "FollowUpId",
            AdmissionId = "AdmissionId",
            Age = "Age",
            UnitId = "UnitId",
            SexId = "SexId",
            Sex = "Sex",
            PinNumber = "PinNumber",
            UnitNumber = "UnitNumber",
            UnitRegNo = "UnitRegNo",
            BedNumber = "BedNumber",
            HospitalRegNo = "HospitalRegNo",
            Weight = "Weight",
            BloodGroup = "BloodGroup",
            Doctor = "Doctor",
            AddtoDiagnosis = "AddtoDiagnosis",
            AddtoComplaint = "AddtoComplaint",
            AdmissionDate = "AdmissionDate",
            ChiefComplaintId = "ChiefComplaintId",
            DiagnosisId = "DiagnosisId",
            DiagnosisName = "DiagnosisName",
            Diagnosis = "Diagnosis",
            PComplaints = "PComplaints",
            PatientName = "PatientName",
            ChiefComplaint = "ChiefComplaint",
            Exam = "Exam",
            Advice = "Advice",
            Note = "Note",
            Plan = "Plan",
            Date = "Date"
        }
    }
}

