namespace CMCPS.Default {
    export interface PNoteRow {
        Id?: number;
        NoteName?: string;
    }

    export namespace PNoteRow {
        export const idProperty = 'Id';
        export const nameProperty = 'NoteName';
        export const localTextPrefix = 'Default.PNote';
        export const lookupKey = 'Default.PNote';

        export function getLookup(): Q.Lookup<PNoteRow> {
            return Q.getLookup<PNoteRow>('Default.PNote');
        }

        export declare const enum Fields {
            Id = "Id",
            NoteName = "NoteName"
        }
    }
}

