namespace CMCPS.Default {
    export interface HistopathologyForm {
        HistopathologyName: Serenity.StringEditor;
    }

    export class HistopathologyForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Histopathology';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!HistopathologyForm.init)  {
                HistopathologyForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(HistopathologyForm, [
                    'HistopathologyName', w0
                ]);
            }
        }
    }
}

