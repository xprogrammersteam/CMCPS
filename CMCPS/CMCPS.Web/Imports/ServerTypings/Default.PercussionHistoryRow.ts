namespace CMCPS.Default {
    export interface PercussionHistoryRow {
        PercussionHistoryId?: number;
        AdmissionId?: number;
        PercussionId?: number;
    }

    export namespace PercussionHistoryRow {
        export const idProperty = 'PercussionHistoryId';
        export const localTextPrefix = 'Default.PercussionHistory';
        export const lookupKey = 'Default.PercussionHistory';

        export function getLookup(): Q.Lookup<PercussionHistoryRow> {
            return Q.getLookup<PercussionHistoryRow>('Default.PercussionHistory');
        }

        export declare const enum Fields {
            PercussionHistoryId = "PercussionHistoryId",
            AdmissionId = "AdmissionId",
            PercussionId = "PercussionId"
        }
    }
}

