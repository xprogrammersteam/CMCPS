namespace CMCPS.Default {
    export interface IncisionRow {
        IncisionId?: number;
        IncisionName?: string;
    }

    export namespace IncisionRow {
        export const idProperty = 'IncisionId';
        export const nameProperty = 'IncisionName';
        export const localTextPrefix = 'Default.Incision';
        export const lookupKey = 'Default.Incision';

        export function getLookup(): Q.Lookup<IncisionRow> {
            return Q.getLookup<IncisionRow>('Default.Incision');
        }

        export declare const enum Fields {
            IncisionId = "IncisionId",
            IncisionName = "IncisionName"
        }
    }
}

