namespace CMCPS.Default {
    export interface OtSisterForm {
        OtSisterName: Serenity.StringEditor;
    }

    export class OtSisterForm extends Serenity.PrefixedContext {
        static formKey = 'Default.OtSister';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OtSisterForm.init)  {
                OtSisterForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(OtSisterForm, [
                    'OtSisterName', w0
                ]);
            }
        }
    }
}

