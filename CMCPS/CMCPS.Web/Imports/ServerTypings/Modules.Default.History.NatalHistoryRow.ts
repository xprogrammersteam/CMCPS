namespace CMCPS.Modules.Default.History {
    export interface NatalHistoryRow {
        PbNatalHistoryId?: number;
        AdmissionId?: number;
        NatalId?: number;
    }

    export namespace NatalHistoryRow {
        export const idProperty = 'PbNatalHistoryId';
        export const localTextPrefix = 'Default.NatalHistory';
        export const lookupKey = 'Default.Historuy';

        export function getLookup(): Q.Lookup<NatalHistoryRow> {
            return Q.getLookup<NatalHistoryRow>('Default.Historuy');
        }

        export declare const enum Fields {
            PbNatalHistoryId = "PbNatalHistoryId",
            AdmissionId = "AdmissionId",
            NatalId = "NatalId"
        }
    }
}

