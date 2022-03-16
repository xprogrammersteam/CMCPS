namespace CMCPS.Default {
    export interface IndicationRow {
        IndicationId?: number;
        IndicationName?: string;
    }

    export namespace IndicationRow {
        export const idProperty = 'IndicationId';
        export const nameProperty = 'IndicationName';
        export const localTextPrefix = 'Default.Indication';
        export const lookupKey = 'Default.Indication';

        export function getLookup(): Q.Lookup<IndicationRow> {
            return Q.getLookup<IndicationRow>('Default.Indication');
        }

        export declare const enum Fields {
            IndicationId = "IndicationId",
            IndicationName = "IndicationName"
        }
    }
}

