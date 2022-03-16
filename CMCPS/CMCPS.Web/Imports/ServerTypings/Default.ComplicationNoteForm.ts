namespace CMCPS.Default {
    export interface ComplicationNoteForm {
        ComplicationNote: Serenity.StringEditor;
    }

    export class ComplicationNoteForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ComplicationNote';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ComplicationNoteForm.init)  {
                ComplicationNoteForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ComplicationNoteForm, [
                    'ComplicationNote', w0
                ]);
            }
        }
    }
}

