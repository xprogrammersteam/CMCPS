namespace CMCPS.Default {
    export interface BedRow {
        BedId?: number;
        BedNumber?: string;
        Note?: string;
    }

    export namespace BedRow {
        export const idProperty = 'BedId';
        export const nameProperty = 'BedNumber';
        export const localTextPrefix = 'Default.Bed';
        export const lookupKey = 'Default.Bed';

        export function getLookup(): Q.Lookup<BedRow> {
            return Q.getLookup<BedRow>('Default.Bed');
        }

        export declare const enum Fields {
            BedId = "BedId",
            BedNumber = "BedNumber",
            Note = "Note"
        }
    }
}

