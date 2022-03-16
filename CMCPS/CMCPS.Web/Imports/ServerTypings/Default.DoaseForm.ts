namespace CMCPS.Default {
    export interface DoaseForm {
        DoaseName: Serenity.StringEditor;
    }

    export class DoaseForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Doase';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DoaseForm.init)  {
                DoaseForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(DoaseForm, [
                    'DoaseName', w0
                ]);
            }
        }
    }
}

