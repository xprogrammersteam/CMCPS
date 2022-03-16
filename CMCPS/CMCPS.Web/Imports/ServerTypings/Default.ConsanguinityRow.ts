namespace CMCPS.Default {
    export interface ConsanguinityRow {
        ConsanguinityId?: number;
        Consanguinity?: string;
    }

    export namespace ConsanguinityRow {
        export const idProperty = 'ConsanguinityId';
        export const nameProperty = 'Consanguinity';
        export const localTextPrefix = 'Default.Consanguinity';
        export const lookupKey = 'Default.Consanguinity';

        export function getLookup(): Q.Lookup<ConsanguinityRow> {
            return Q.getLookup<ConsanguinityRow>('Default.Consanguinity');
        }

        export declare const enum Fields {
            ConsanguinityId = "ConsanguinityId",
            Consanguinity = "Consanguinity"
        }
    }
}

