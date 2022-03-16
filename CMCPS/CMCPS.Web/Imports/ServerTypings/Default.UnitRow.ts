namespace CMCPS.Default {
    export interface UnitRow {
        UnitId?: number;
        UnitNumber?: string;
        Note?: string;
    }

    export namespace UnitRow {
        export const idProperty = 'UnitId';
        export const nameProperty = 'UnitNumber';
        export const localTextPrefix = 'Default.Unit';
        export const lookupKey = 'Default.Unit';

        export function getLookup(): Q.Lookup<UnitRow> {
            return Q.getLookup<UnitRow>('Default.Unit');
        }

        export declare const enum Fields {
            UnitId = "UnitId",
            UnitNumber = "UnitNumber",
            Note = "Note"
        }
    }
}

