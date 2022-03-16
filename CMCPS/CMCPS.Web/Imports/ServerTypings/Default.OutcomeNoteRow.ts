namespace CMCPS.Default {
    export interface OutcomeNoteRow {
        OutcomeNoteId?: number;
        Outcome?: string;
    }

    export namespace OutcomeNoteRow {
        export const idProperty = 'OutcomeNoteId';
        export const nameProperty = 'Outcome';
        export const localTextPrefix = 'Default.OutcomeNote';
        export const lookupKey = 'Default.OutcomeNote';

        export function getLookup(): Q.Lookup<OutcomeNoteRow> {
            return Q.getLookup<OutcomeNoteRow>('Default.OutcomeNote');
        }

        export declare const enum Fields {
            OutcomeNoteId = "OutcomeNoteId",
            Outcome = "Outcome"
        }
    }
}

