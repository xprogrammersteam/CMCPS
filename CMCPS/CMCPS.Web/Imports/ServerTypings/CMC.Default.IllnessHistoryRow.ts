namespace CMC.Default {
    export interface IllnessHistoryRow {
        IllnessHistoryId?: number;
        AdmissionId?: number;
        IllnessId?: number;
    }

    export namespace IllnessHistoryRow {
        export const idProperty = 'IllnessHistoryId';
        export const localTextPrefix = 'Default.IllnessHistory';
        export const lookupKey = 'Default.IllnessHistory';

        export function getLookup(): Q.Lookup<IllnessHistoryRow> {
            return Q.getLookup<IllnessHistoryRow>('Default.IllnessHistory');
        }

        export declare const enum Fields {
            IllnessHistoryId = "IllnessHistoryId",
            AdmissionId = "AdmissionId",
            IllnessId = "IllnessId"
        }
    }
}

