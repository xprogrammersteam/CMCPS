namespace CMCPS.Default {
    export interface OtAttendantRow {
        OtAttendantId?: number;
        OtAttendantName?: string;
    }

    export namespace OtAttendantRow {
        export const idProperty = 'OtAttendantId';
        export const nameProperty = 'OtAttendantName';
        export const localTextPrefix = 'Default.OtAttendant';
        export const lookupKey = 'Default.OtAttendant';

        export function getLookup(): Q.Lookup<OtAttendantRow> {
            return Q.getLookup<OtAttendantRow>('Default.OtAttendant');
        }

        export declare const enum Fields {
            OtAttendantId = "OtAttendantId",
            OtAttendantName = "OtAttendantName"
        }
    }
}

