namespace CMCPS.Default {
    export interface ImmunizationForm {
        ImmunizationName: Serenity.StringEditor;
    }

    export class ImmunizationForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Immunization';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ImmunizationForm.init)  {
                ImmunizationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ImmunizationForm, [
                    'ImmunizationName', w0
                ]);
            }
        }
    }
}

