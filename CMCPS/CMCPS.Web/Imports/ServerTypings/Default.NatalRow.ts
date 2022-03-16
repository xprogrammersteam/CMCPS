namespace CMCPS.Default {
    export interface NatalRow {
        NatalId?: number;
        NatalName?: string;
    }

    export namespace NatalRow {
        export const idProperty = 'NatalId';
        export const nameProperty = 'NatalName';
        export const localTextPrefix = 'Default.Natal';
        export const lookupKey = 'Default.Natal';

        export function getLookup(): Q.Lookup<NatalRow> {
            return Q.getLookup<NatalRow>('Default.Natal');
        }

        export declare const enum Fields {
            NatalId = "NatalId",
            NatalName = "NatalName"
        }
    }
}

