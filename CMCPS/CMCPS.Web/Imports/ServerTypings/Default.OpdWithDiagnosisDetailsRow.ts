namespace CMCPS.Default {
    export interface OpdWithDiagnosisDetailsRow {
        Id?: number;
        OpdId?: number;
        DiagnosisId?: number;
        Diagnosis?: string;
    }

    export namespace OpdWithDiagnosisDetailsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.OpdWithDiagnosisDetails';

        export declare const enum Fields {
            Id = "Id",
            OpdId = "OpdId",
            DiagnosisId = "DiagnosisId",
            Diagnosis = "Diagnosis"
        }
    }
}

