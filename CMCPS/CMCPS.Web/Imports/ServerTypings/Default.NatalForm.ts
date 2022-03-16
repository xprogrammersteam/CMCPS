namespace CMCPS.Default {
    export interface NatalForm {
        NatalName: Serenity.StringEditor;
    }

    export class NatalForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Natal';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NatalForm.init)  {
                NatalForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(NatalForm, [
                    'NatalName', w0
                ]);
            }
        }
    }
}

