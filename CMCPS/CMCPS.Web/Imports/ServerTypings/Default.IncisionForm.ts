namespace CMCPS.Default {
    export interface IncisionForm {
        IncisionName: Serenity.StringEditor;
    }

    export class IncisionForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Incision';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!IncisionForm.init)  {
                IncisionForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(IncisionForm, [
                    'IncisionName', w0
                ]);
            }
        }
    }
}

