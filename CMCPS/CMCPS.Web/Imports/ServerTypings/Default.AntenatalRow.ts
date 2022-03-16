namespace CMCPS.Default {
    export interface AntenatalRow {
        AntenatalId?: number;
        AntenatalName?: string;
    }

    export namespace AntenatalRow {
        export const idProperty = 'AntenatalId';
        export const nameProperty = 'AntenatalName';
        export const localTextPrefix = 'Default.Antenatal';
        export const lookupKey = 'Default.Antenatal';

        export function getLookup(): Q.Lookup<AntenatalRow> {
            return Q.getLookup<AntenatalRow>('Default.Antenatal');
        }

        export declare const enum Fields {
            AntenatalId = "AntenatalId",
            AntenatalName = "AntenatalName"
        }
    }
}

