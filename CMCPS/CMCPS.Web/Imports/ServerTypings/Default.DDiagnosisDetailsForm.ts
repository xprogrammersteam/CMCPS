namespace CMCPS.Default {
    export interface DDiagnosisDetailsForm {
        DiagnosisId: Serenity.LookupEditor;
    }

    export class DDiagnosisDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.DDiagnosisDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DDiagnosisDetailsForm.init)  {
                DDiagnosisDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;

                Q.initFormType(DDiagnosisDetailsForm, [
                    'DiagnosisId', w0
                ]);
            }
        }
    }
}

