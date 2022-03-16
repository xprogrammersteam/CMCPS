namespace CMCPS.Default {
    export interface OtSisterRow {
        OtSisterId?: number;
        OtSisterName?: string;
    }

    export namespace OtSisterRow {
        export const idProperty = 'OtSisterId';
        export const nameProperty = 'OtSisterName';
        export const localTextPrefix = 'Default.OtSister';
        export const lookupKey = 'Default.OTSister';

        export function getLookup(): Q.Lookup<OtSisterRow> {
            return Q.getLookup<OtSisterRow>('Default.OTSister');
        }

        export declare const enum Fields {
            OtSisterId = "OtSisterId",
            OtSisterName = "OtSisterName"
        }
    }
}

