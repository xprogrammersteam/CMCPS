namespace CMCPS.Default {
    export interface WardForm {
        WardNo: Serenity.StringEditor;
    }

    export class WardForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Ward';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WardForm.init)  {
                WardForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(WardForm, [
                    'WardNo', w0
                ]);
            }
        }
    }
}

