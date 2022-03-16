namespace CMCPS.Default {
    export interface SpecialNoteRow {
        SpecialNoteId?: number;
        SpecialNoteName?: string;
    }

    export namespace SpecialNoteRow {
        export const idProperty = 'SpecialNoteId';
        export const nameProperty = 'SpecialNoteName';
        export const localTextPrefix = 'Default.SpecialNote';
        export const lookupKey = 'Default.SpecialNote';

        export function getLookup(): Q.Lookup<SpecialNoteRow> {
            return Q.getLookup<SpecialNoteRow>('Default.SpecialNote');
        }

        export declare const enum Fields {
            SpecialNoteId = "SpecialNoteId",
            SpecialNoteName = "SpecialNoteName"
        }
    }
}

