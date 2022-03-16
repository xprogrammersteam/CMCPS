namespace CMCPS.Default {
    export interface DiagnosisRow {
        DiagnosisId?: number;
        DiagnosisName?: string;
        Note?: string;
    }

    export namespace DiagnosisRow {
        export const idProperty = 'DiagnosisId';
        export const nameProperty = 'DiagnosisName';
        export const localTextPrefix = 'Default.Diagnosis';
        export const lookupKey = 'Default.Diagnosis';

        export function getLookup(): Q.Lookup<DiagnosisRow> {
            return Q.getLookup<DiagnosisRow>('Default.Diagnosis');
        }

        export declare const enum Fields {
            DiagnosisId = "DiagnosisId",
            DiagnosisName = "DiagnosisName",
            Note = "Note"
        }
    }
}

