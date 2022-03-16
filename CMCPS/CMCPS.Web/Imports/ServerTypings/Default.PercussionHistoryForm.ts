namespace CMCPS.Default {
    export interface PercussionHistoryForm {
        AdmissionId: Serenity.IntegerEditor;
        PercussionId: Serenity.IntegerEditor;
    }

    export class PercussionHistoryForm extends Serenity.PrefixedContext {
        static formKey = 'Default.PercussionHistory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PercussionHistoryForm.init)  {
                PercussionHistoryForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(PercussionHistoryForm, [
                    'AdmissionId', w0,
                    'PercussionId', w0
                ]);
            }
        }
    }
}

