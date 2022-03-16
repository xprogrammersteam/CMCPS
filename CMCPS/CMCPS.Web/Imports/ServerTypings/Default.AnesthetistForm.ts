namespace CMCPS.Default {
    export interface AnesthetistForm {
        AnesthetistName: Serenity.StringEditor;
    }

    export class AnesthetistForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Anesthetist';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AnesthetistForm.init)  {
                AnesthetistForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AnesthetistForm, [
                    'AnesthetistName', w0
                ]);
            }
        }
    }
}

