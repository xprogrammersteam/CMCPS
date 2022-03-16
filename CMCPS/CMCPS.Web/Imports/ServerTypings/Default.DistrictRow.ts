namespace CMCPS.Default {
    export interface DistrictRow {
        DistrictId?: number;
        DistrictName?: string;
    }

    export namespace DistrictRow {
        export const idProperty = 'DistrictId';
        export const nameProperty = 'DistrictName';
        export const localTextPrefix = 'Default.District';
        export const lookupKey = 'Default.District';

        export function getLookup(): Q.Lookup<DistrictRow> {
            return Q.getLookup<DistrictRow>('Default.District');
        }

        export declare const enum Fields {
            DistrictId = "DistrictId",
            DistrictName = "DistrictName"
        }
    }
}

