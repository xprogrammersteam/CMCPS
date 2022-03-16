namespace CMCPS.Default {
    export interface BloodGroupsRow {
        BloodGroupId?: number;
        BloodGroup?: string;
    }

    export namespace BloodGroupsRow {
        export const idProperty = 'BloodGroupId';
        export const nameProperty = 'BloodGroup';
        export const localTextPrefix = 'Default.BloodGroups';
        export const lookupKey = 'Default.BloodGroups';

        export function getLookup(): Q.Lookup<BloodGroupsRow> {
            return Q.getLookup<BloodGroupsRow>('Default.BloodGroups');
        }

        export declare const enum Fields {
            BloodGroupId = "BloodGroupId",
            BloodGroup = "BloodGroup"
        }
    }
}

