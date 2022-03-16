namespace CMCPS.Modules.Default.History {
    export interface AntenatalHistoryRow {
        PbAntenatalHistoryId?: number;
        AdmissionId?: number;
        AntenatalId?: number;
    }

    export namespace AntenatalHistoryRow {
        export const idProperty = 'PbAntenatalHistoryId';
        export const localTextPrefix = 'Default.AntenatalHistory';
        export const lookupKey = 'Default.History';

        export function getLookup(): Q.Lookup<AntenatalHistoryRow> {
            return Q.getLookup<AntenatalHistoryRow>('Default.History');
        }

        export declare const enum Fields {
            PbAntenatalHistoryId = "PbAntenatalHistoryId",
            AdmissionId = "AdmissionId",
            AntenatalId = "AntenatalId"
        }
    }
}

