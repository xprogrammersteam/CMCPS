namespace CMC.Default {
    export interface IllnessHistoryForm {
        AdmissionId: Serenity.IntegerEditor;
        IllnessId: Serenity.IntegerEditor;
    }

    export class IllnessHistoryForm extends Serenity.PrefixedContext {
        static formKey = 'Default.IllnessHistory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!IllnessHistoryForm.init)  {
                IllnessHistoryForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(IllnessHistoryForm, [
                    'AdmissionId', w0,
                    'IllnessId', w0
                ]);
            }
        }
    }
}

