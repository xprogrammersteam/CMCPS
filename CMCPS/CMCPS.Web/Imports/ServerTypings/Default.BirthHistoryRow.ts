namespace CMCPS.Default {
    export interface BirthHistoryRow {
        BirthHistoryId?: number;
        BirthHistory?: string;
        Note?: string;
    }

    export namespace BirthHistoryRow {
        export const idProperty = 'BirthHistoryId';
        export const nameProperty = 'BirthHistory';
        export const localTextPrefix = 'Default.BirthHistory';
        export const lookupKey = 'Default.BirthHistory';

        export function getLookup(): Q.Lookup<BirthHistoryRow> {
            return Q.getLookup<BirthHistoryRow>('Default.BirthHistory');
        }

        export declare const enum Fields {
            BirthHistoryId = "BirthHistoryId",
            BirthHistory = "BirthHistory",
            Note = "Note"
        }
    }
}

