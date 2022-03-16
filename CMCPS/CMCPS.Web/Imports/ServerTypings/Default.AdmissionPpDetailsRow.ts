namespace CMCPS.Default {
    export interface AdmissionPpDetailsRow {
        HistoryId?: number;
        AdmissionId?: number;
        ActivityId?: Modules.Default.Admission.PPActivity;
        SmokingId?: string;
        AlcoholismId?: string;
        DrugAddictionId?: Modules.Default.Admission.FamilyHistoryDisease;
        ExposureHistoryId?: Modules.Default.Admission.FamilyHistoryDisease;
    }

    export namespace AdmissionPpDetailsRow {
        export const idProperty = 'HistoryId';
        export const nameProperty = 'SmokingId';
        export const localTextPrefix = 'Default.AdmissionPpDetails';

        export declare const enum Fields {
            HistoryId = "HistoryId",
            AdmissionId = "AdmissionId",
            ActivityId = "ActivityId",
            SmokingId = "SmokingId",
            AlcoholismId = "AlcoholismId",
            DrugAddictionId = "DrugAddictionId",
            ExposureHistoryId = "ExposureHistoryId"
        }
    }
}

