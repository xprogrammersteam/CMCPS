namespace CMCPS.Default {
    export interface DiagnosisForm {
        DiagnosisName: Serenity.StringEditor;
        Note: Serenity.StringEditor;
    }

    export class DiagnosisForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Diagnosis';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DiagnosisForm.init)  {
                DiagnosisForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(DiagnosisForm, [
                    'DiagnosisName', w0,
                    'Note', w0
                ]);
            }
        }
    }
}

