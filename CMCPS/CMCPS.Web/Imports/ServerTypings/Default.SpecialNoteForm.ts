namespace CMCPS.Default {
    export interface SpecialNoteForm {
        SpecialNoteName: Serenity.StringEditor;
    }

    export class SpecialNoteForm extends Serenity.PrefixedContext {
        static formKey = 'Default.SpecialNote';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SpecialNoteForm.init)  {
                SpecialNoteForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SpecialNoteForm, [
                    'SpecialNoteName', w0
                ]);
            }
        }
    }
}

