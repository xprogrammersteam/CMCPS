namespace CMCPS.Default {
    export interface UpazilaRow {
        UpazilaId?: number;
        DistrictId?: number;
        UpazilaName?: string;
        DistrictName?: string;
    }

    export namespace UpazilaRow {
        export const idProperty = 'UpazilaId';
        export const nameProperty = 'UpazilaName';
        export const localTextPrefix = 'Default.Upazila';
        export const lookupKey = 'Default.Upazila';

        export function getLookup(): Q.Lookup<UpazilaRow> {
            return Q.getLookup<UpazilaRow>('Default.Upazila');
        }

        export declare const enum Fields {
            UpazilaId = "UpazilaId",
            DistrictId = "DistrictId",
            UpazilaName = "UpazilaName",
            DistrictName = "DistrictName"
        }
    }
}

