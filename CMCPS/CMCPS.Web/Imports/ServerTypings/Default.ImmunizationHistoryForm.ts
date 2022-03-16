namespace CMCPS.Default {
    export interface ImmunizationHistoryForm {
        AdmissionId: Serenity.IntegerEditor;
        ImmunizationId: Serenity.IntegerEditor;
    }

    export class ImmunizationHistoryForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ImmunizationHistory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ImmunizationHistoryForm.init)  {
                ImmunizationHistoryForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(ImmunizationHistoryForm, [
                    'AdmissionId', w0,
                    'ImmunizationId', w0
                ]);
            }
        }
    }
}

