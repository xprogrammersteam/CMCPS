namespace CMCPS.Default {
    export interface PathologyRow {
        PathologyId?: number;
        PathologyName?: string;
    }

    export namespace PathologyRow {
        export const idProperty = 'PathologyId';
        export const nameProperty = 'PathologyName';
        export const localTextPrefix = 'Default.Pathology';
        export const lookupKey = 'Default.Pathology';

        export function getLookup(): Q.Lookup<PathologyRow> {
            return Q.getLookup<PathologyRow>('Default.Pathology');
        }

        export declare const enum Fields {
            PathologyId = "PathologyId",
            PathologyName = "PathologyName"
        }
    }
}

