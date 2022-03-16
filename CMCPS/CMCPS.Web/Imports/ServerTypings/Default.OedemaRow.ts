namespace CMCPS.Default {
    export interface OedemaRow {
        OedemaId?: number;
        Oedema?: string;
    }

    export namespace OedemaRow {
        export const idProperty = 'OedemaId';
        export const nameProperty = 'Oedema';
        export const localTextPrefix = 'Default.Oedema';
        export const lookupKey = 'Default.Oedema';

        export function getLookup(): Q.Lookup<OedemaRow> {
            return Q.getLookup<OedemaRow>('Default.Oedema');
        }

        export declare const enum Fields {
            OedemaId = "OedemaId",
            Oedema = "Oedema"
        }
    }
}

