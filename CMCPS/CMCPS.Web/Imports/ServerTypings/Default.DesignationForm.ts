namespace CMCPS.Default {
    export interface DesignationForm {
        DesignationName: Serenity.StringEditor;
    }

    export class DesignationForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Designation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DesignationForm.init)  {
                DesignationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(DesignationForm, [
                    'DesignationName', w0
                ]);
            }
        }
    }
}

