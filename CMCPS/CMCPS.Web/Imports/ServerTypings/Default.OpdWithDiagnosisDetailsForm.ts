namespace CMCPS.Default {
    export interface OpdWithDiagnosisDetailsForm {
        DiagnosisId: Serenity.LookupEditor;
    }

    export class OpdWithDiagnosisDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.OpdWithDiagnosisDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OpdWithDiagnosisDetailsForm.init)  {
                OpdWithDiagnosisDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;

                Q.initFormType(OpdWithDiagnosisDetailsForm, [
                    'DiagnosisId', w0
                ]);
            }
        }
    }
}

