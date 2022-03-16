namespace CMCPS.Default {
    export interface ImmunizationHistoryRow {
        ImmunizationHistoryId?: number;
        AdmissionId?: number;
        ImmunizationId?: number;
    }

    export namespace ImmunizationHistoryRow {
        export const idProperty = 'ImmunizationHistoryId';
        export const localTextPrefix = 'Default.ImmunizationHistory';
        export const lookupKey = 'Default.ImmunizationHistory';

        export function getLookup(): Q.Lookup<ImmunizationHistoryRow> {
            return Q.getLookup<ImmunizationHistoryRow>('Default.ImmunizationHistory');
        }

        export declare const enum Fields {
            ImmunizationHistoryId = "ImmunizationHistoryId",
            AdmissionId = "AdmissionId",
            ImmunizationId = "ImmunizationId"
        }
    }
}

