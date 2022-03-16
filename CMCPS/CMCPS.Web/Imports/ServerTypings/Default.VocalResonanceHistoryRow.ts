namespace CMCPS.Default {
    export interface VocalResonanceHistoryRow {
        VocalResonanceHistoryId?: number;
        AdmissionId?: number;
        VocalResonanceId?: number;
    }

    export namespace VocalResonanceHistoryRow {
        export const idProperty = 'VocalResonanceHistoryId';
        export const localTextPrefix = 'Default.VocalResonanceHistory';
        export const lookupKey = 'Default.VocalResonanceHistory';

        export function getLookup(): Q.Lookup<VocalResonanceHistoryRow> {
            return Q.getLookup<VocalResonanceHistoryRow>('Default.VocalResonanceHistory');
        }

        export declare const enum Fields {
            VocalResonanceHistoryId = "VocalResonanceHistoryId",
            AdmissionId = "AdmissionId",
            VocalResonanceId = "VocalResonanceId"
        }
    }
}

