namespace CMCPS.Default {
    export interface AuscultationHistoryForm {
        AdmissionId: Serenity.IntegerEditor;
        AuscultationId: Serenity.IntegerEditor;
    }

    export class AuscultationHistoryForm extends Serenity.PrefixedContext {
        static formKey = 'Default.AuscultationHistory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AuscultationHistoryForm.init)  {
                AuscultationHistoryForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(AuscultationHistoryForm, [
                    'AdmissionId', w0,
                    'AuscultationId', w0
                ]);
            }
        }
    }
}

