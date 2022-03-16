namespace CMCPS.Default {
    export interface DiagramRow {
        DiagramId?: number;
        DiagramName?: string;
    }

    export namespace DiagramRow {
        export const idProperty = 'DiagramId';
        export const nameProperty = 'DiagramName';
        export const localTextPrefix = 'Default.Diagram';
        export const lookupKey = 'Default.Diagram';

        export function getLookup(): Q.Lookup<DiagramRow> {
            return Q.getLookup<DiagramRow>('Default.Diagram');
        }

        export declare const enum Fields {
            DiagramId = "DiagramId",
            DiagramName = "DiagramName"
        }
    }
}

