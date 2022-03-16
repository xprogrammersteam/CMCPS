namespace CMCPS.Default {
    export interface SexRow {
        SexId?: number;
        Sex?: string;
        Note?: string;
    }

    export namespace SexRow {
        export const idProperty = 'SexId';
        export const nameProperty = 'Sex';
        export const localTextPrefix = 'Default.Sex';
        export const lookupKey = 'Default.Sex';

        export function getLookup(): Q.Lookup<SexRow> {
            return Q.getLookup<SexRow>('Default.Sex');
        }

        export declare const enum Fields {
            SexId = "SexId",
            Sex = "Sex",
            Note = "Note"
        }
    }
}

