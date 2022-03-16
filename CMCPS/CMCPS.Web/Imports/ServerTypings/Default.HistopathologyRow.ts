namespace CMCPS.Default {
    export interface HistopathologyRow {
        HistopathologyId?: number;
        HistopathologyName?: string;
    }

    export namespace HistopathologyRow {
        export const idProperty = 'HistopathologyId';
        export const nameProperty = 'HistopathologyName';
        export const localTextPrefix = 'Default.Histopathology';
        export const lookupKey = 'Default.Histopathology';

        export function getLookup(): Q.Lookup<HistopathologyRow> {
            return Q.getLookup<HistopathologyRow>('Default.Histopathology');
        }

        export declare const enum Fields {
            HistopathologyId = "HistopathologyId",
            HistopathologyName = "HistopathologyName"
        }
    }
}

