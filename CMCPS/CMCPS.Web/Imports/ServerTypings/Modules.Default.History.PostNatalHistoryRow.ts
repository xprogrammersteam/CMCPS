namespace CMCPS.Modules.Default.History {
    export interface PostNatalHistoryRow {
        PBPostNatalHistoryId?: number;
        AdmissionId?: number;
        PostNatalId?: number;
    }

    export namespace PostNatalHistoryRow {
        export const idProperty = 'PBPostNatalHistoryId';
        export const localTextPrefix = 'Default.PostNatalHistory';
        export const lookupKey = 'Default.Historyy';

        export function getLookup(): Q.Lookup<PostNatalHistoryRow> {
            return Q.getLookup<PostNatalHistoryRow>('Default.Historyy');
        }

        export declare const enum Fields {
            PBPostNatalHistoryId = "PBPostNatalHistoryId",
            AdmissionId = "AdmissionId",
            PostNatalId = "PostNatalId"
        }
    }
}

