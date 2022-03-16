namespace CMCPS.Default {
    export interface PatientBirthHistoryRow {
        PbHistoryId?: number;
        AdmissionId?: number;
        BirthHistoryId?: number;
        AdmissionDate?: string;
        AdmissionTime?: string;
        AdmissionBedId?: number;
        AdmissionPComplaintsId?: number;
        AdmissionHistoryOfPresentIllness?: string;
        AdmissionHoPastIllness?: string;
        AdmissionDrugHistory?: string;
        AdmissionFamilyHistoryId?: number;
        AdmissionImmunization?: boolean;
        AdmissionInsertUserId?: number;
        AdmissionInsertDate?: string;
        AdmissionUpdateUserId?: number;
        AdmissionUpdateDate?: string;
        BirthHistory?: string;
        BirthHistoryNote?: string;
    }

    export namespace PatientBirthHistoryRow {
        export const idProperty = 'PbHistoryId';
        export const localTextPrefix = 'Default.PatientBirthHistory';

        export declare const enum Fields {
            PbHistoryId = "PbHistoryId",
            AdmissionId = "AdmissionId",
            BirthHistoryId = "BirthHistoryId",
            AdmissionDate = "AdmissionDate",
            AdmissionTime = "AdmissionTime",
            AdmissionBedId = "AdmissionBedId",
            AdmissionPComplaintsId = "AdmissionPComplaintsId",
            AdmissionHistoryOfPresentIllness = "AdmissionHistoryOfPresentIllness",
            AdmissionHoPastIllness = "AdmissionHoPastIllness",
            AdmissionDrugHistory = "AdmissionDrugHistory",
            AdmissionFamilyHistoryId = "AdmissionFamilyHistoryId",
            AdmissionImmunization = "AdmissionImmunization",
            AdmissionInsertUserId = "AdmissionInsertUserId",
            AdmissionInsertDate = "AdmissionInsertDate",
            AdmissionUpdateUserId = "AdmissionUpdateUserId",
            AdmissionUpdateDate = "AdmissionUpdateDate",
            BirthHistory = "BirthHistory",
            BirthHistoryNote = "BirthHistoryNote"
        }
    }
}

