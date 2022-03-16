namespace CMCPS.Default {
    export interface OutcomeNoteForm {
        Outcome: Serenity.StringEditor;
    }

    export class OutcomeNoteForm extends Serenity.PrefixedContext {
        static formKey = 'Default.OutcomeNote';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OutcomeNoteForm.init)  {
                OutcomeNoteForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(OutcomeNoteForm, [
                    'Outcome', w0
                ]);
            }
        }
    }
}

