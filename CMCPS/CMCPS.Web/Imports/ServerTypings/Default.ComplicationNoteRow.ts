namespace CMCPS.Default {
    export interface ComplicationNoteRow {
        ComplicationNoteId?: number;
        ComplicationNote?: string;
    }

    export namespace ComplicationNoteRow {
        export const idProperty = 'ComplicationNoteId';
        export const nameProperty = 'ComplicationNote';
        export const localTextPrefix = 'Default.ComplicationNote';
        export const lookupKey = 'Default.ComplicationNote';

        export function getLookup(): Q.Lookup<ComplicationNoteRow> {
            return Q.getLookup<ComplicationNoteRow>('Default.ComplicationNote');
        }

        export declare const enum Fields {
            ComplicationNoteId = "ComplicationNoteId",
            ComplicationNote = "ComplicationNote"
        }
    }
}

