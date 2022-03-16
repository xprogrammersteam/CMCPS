namespace CMCPS.Default {
    export interface SurgeonForm {
        SurgeonName: Serenity.StringEditor;
    }

    export class SurgeonForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Surgeon';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SurgeonForm.init)  {
                SurgeonForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SurgeonForm, [
                    'SurgeonName', w0
                ]);
            }
        }
    }
}

