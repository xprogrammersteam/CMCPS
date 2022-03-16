namespace CMCPS.Default {
    export interface DehydrationRow {
        DehydrationId?: number;
        Dehydration?: string;
    }

    export namespace DehydrationRow {
        export const idProperty = 'DehydrationId';
        export const nameProperty = 'Dehydration';
        export const localTextPrefix = 'Default.Dehydration';
        export const lookupKey = 'Default.Dehydration';

        export function getLookup(): Q.Lookup<DehydrationRow> {
            return Q.getLookup<DehydrationRow>('Default.Dehydration');
        }

        export declare const enum Fields {
            DehydrationId = "DehydrationId",
            Dehydration = "Dehydration"
        }
    }
}

