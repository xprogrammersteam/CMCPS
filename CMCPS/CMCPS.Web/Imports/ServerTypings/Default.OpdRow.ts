namespace CMCPS.Default {
    export interface OpdRow {
        OpdId?: number;
        Name?: string;
        Date?: string;
        Age?: string;
        SexId?: number;
        Sex?: string;
        BodyWt?: string;
        RegNo?: string;
        PinNo?: string;
        UnitId?: number;
        UniNo?: string;
        PatientType?: Modules.Default.Admission.TypeOfPatient;
        Address?: string;
        DistrictId?: number;
        DistrictName?: string;
        UpazilaId?: number;
        UpazilaName?: string;
        House?: string;
        PostOffice?: string;
        Mobile?: string;
        History?: string;
        Examination?: string;
        Investigation?: string;
        Doctor?: string;
        Advice?: string;
        Remarks?: string;
        DiagnosisDetails?: OpdWithDiagnosisDetailsRow[];
    }

    export namespace OpdRow {
        export const idProperty = 'OpdId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Opd';

        export declare const enum Fields {
            OpdId = "OpdId",
            Name = "Name",
            Date = "Date",
            Age = "Age",
            SexId = "SexId",
            Sex = "Sex",
            BodyWt = "BodyWt",
            RegNo = "RegNo",
            PinNo = "PinNo",
            UnitId = "UnitId",
            UniNo = "UniNo",
            PatientType = "PatientType",
            Address = "Address",
            DistrictId = "DistrictId",
            DistrictName = "DistrictName",
            UpazilaId = "UpazilaId",
            UpazilaName = "UpazilaName",
            House = "House",
            PostOffice = "PostOffice",
            Mobile = "Mobile",
            History = "History",
            Examination = "Examination",
            Investigation = "Investigation",
            Doctor = "Doctor",
            Advice = "Advice",
            Remarks = "Remarks",
            DiagnosisDetails = "DiagnosisDetails"
        }
    }
}

