namespace CMCPS.Default {
    export interface VocalResonanceRow {
        VocalResonanceId?: number;
        VocalResonanceName?: string;
    }

    export namespace VocalResonanceRow {
        export const idProperty = 'VocalResonanceId';
        export const nameProperty = 'VocalResonanceName';
        export const localTextPrefix = 'Default.VocalResonance';
        export const lookupKey = 'Default.VocalResonance';

        export function getLookup(): Q.Lookup<VocalResonanceRow> {
            return Q.getLookup<VocalResonanceRow>('Default.VocalResonance');
        }

        export declare const enum Fields {
            VocalResonanceId = "VocalResonanceId",
            VocalResonanceName = "VocalResonanceName"
        }
    }
}

