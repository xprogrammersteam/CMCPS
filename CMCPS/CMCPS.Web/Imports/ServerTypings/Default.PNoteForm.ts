namespace CMCPS.Default {
    export interface PNoteForm {
        NoteName: Serenity.StringEditor;
    }

    export class PNoteForm extends Serenity.PrefixedContext {
        static formKey = 'Default.PNote';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PNoteForm.init)  {
                PNoteForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PNoteForm, [
                    'NoteName', w0
                ]);
            }
        }
    }
}

