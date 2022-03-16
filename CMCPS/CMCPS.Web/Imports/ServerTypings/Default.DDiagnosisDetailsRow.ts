namespace CMCPS.Default {
    export interface DDiagnosisDetailsRow {
        DId?: number;
        AdmissionId?: number;
        DiagnosisId?: number;
        Diagnosis?: string;
    }

    export namespace DDiagnosisDetailsRow {
        export const idProperty = 'DId';
        export const nameProperty = 'Diagnosis';
        export const localTextPrefix = 'Default.DDiagnosisDetails';

        export declare const enum Fields {
            DId = "DId",
            AdmissionId = "AdmissionId",
            DiagnosisId = "DiagnosisId",
            Diagnosis = "Diagnosis"
        }
    }
}

