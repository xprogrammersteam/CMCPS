namespace CMCPS.Default {
    export interface AuscultationHistoryRow {
        AuscultationHistoryId?: number;
        AdmissionId?: number;
        AuscultationId?: number;
    }

    export namespace AuscultationHistoryRow {
        export const idProperty = 'AuscultationHistoryId';
        export const localTextPrefix = 'Default.AuscultationHistory';
        export const lookupKey = 'Default.AuscultationHistory';

        export function getLookup(): Q.Lookup<AuscultationHistoryRow> {
            return Q.getLookup<AuscultationHistoryRow>('Default.AuscultationHistory');
        }

        export declare const enum Fields {
            AuscultationHistoryId = "AuscultationHistoryId",
            AdmissionId = "AdmissionId",
            AuscultationId = "AuscultationId"
        }
    }
}

