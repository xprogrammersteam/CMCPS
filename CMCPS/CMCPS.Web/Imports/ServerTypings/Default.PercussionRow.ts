namespace CMCPS.Default {
    export interface PercussionRow {
        PercussionId?: number;
        PercussionName?: string;
    }

    export namespace PercussionRow {
        export const idProperty = 'PercussionId';
        export const nameProperty = 'PercussionName';
        export const localTextPrefix = 'Default.Percussion';
        export const lookupKey = 'Default.Percussion';

        export function getLookup(): Q.Lookup<PercussionRow> {
            return Q.getLookup<PercussionRow>('Default.Percussion');
        }

        export declare const enum Fields {
            PercussionId = "PercussionId",
            PercussionName = "PercussionName"
        }
    }
}

