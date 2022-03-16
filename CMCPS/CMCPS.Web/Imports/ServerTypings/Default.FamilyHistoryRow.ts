namespace CMCPS.Default {
    export interface FamilyHistoryRow {
        FamilyHistoryId?: number;
        FamilyHistory?: string;
        Note?: string;
    }

    export namespace FamilyHistoryRow {
        export const idProperty = 'FamilyHistoryId';
        export const nameProperty = 'FamilyHistory';
        export const localTextPrefix = 'Default.FamilyHistory';
        export const lookupKey = 'Default.FamilyHistory';

        export function getLookup(): Q.Lookup<FamilyHistoryRow> {
            return Q.getLookup<FamilyHistoryRow>('Default.FamilyHistory');
        }

        export declare const enum Fields {
            FamilyHistoryId = "FamilyHistoryId",
            FamilyHistory = "FamilyHistory",
            Note = "Note"
        }
    }
}

