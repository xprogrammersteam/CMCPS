namespace CMCPS.Default {
    export interface MajorSurgeryRow {
        MajorSurgeryId?: number;
        MajorSurgeryName?: string;
    }

    export namespace MajorSurgeryRow {
        export const idProperty = 'MajorSurgeryId';
        export const nameProperty = 'MajorSurgeryName';
        export const localTextPrefix = 'Default.MajorSurgery';
        export const lookupKey = 'Default.MajorSurgery';

        export function getLookup(): Q.Lookup<MajorSurgeryRow> {
            return Q.getLookup<MajorSurgeryRow>('Default.MajorSurgery');
        }

        export declare const enum Fields {
            MajorSurgeryId = "MajorSurgeryId",
            MajorSurgeryName = "MajorSurgeryName"
        }
    }
}

