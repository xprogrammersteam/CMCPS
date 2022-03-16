namespace CMCPS.Default {
    export interface PatientTypeRow {
        PatientTypeId?: number;
        PatientType?: string;
    }

    export namespace PatientTypeRow {
        export const idProperty = 'PatientTypeId';
        export const nameProperty = 'PatientType';
        export const localTextPrefix = 'Default.PatientType';
        export const lookupKey = 'Default.PatientType';

        export function getLookup(): Q.Lookup<PatientTypeRow> {
            return Q.getLookup<PatientTypeRow>('Default.PatientType');
        }

        export declare const enum Fields {
            PatientTypeId = "PatientTypeId",
            PatientType = "PatientType"
        }
    }
}

