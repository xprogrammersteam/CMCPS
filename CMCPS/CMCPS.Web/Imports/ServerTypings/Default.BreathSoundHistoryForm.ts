namespace CMCPS.Default {
    export interface BreathSoundHistoryForm {
        AdmissionId: Serenity.IntegerEditor;
        BreathSoundId: Serenity.IntegerEditor;
    }

    export class BreathSoundHistoryForm extends Serenity.PrefixedContext {
        static formKey = 'Default.BreathSoundHistory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BreathSoundHistoryForm.init)  {
                BreathSoundHistoryForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(BreathSoundHistoryForm, [
                    'AdmissionId', w0,
                    'BreathSoundId', w0
                ]);
            }
        }
    }
}

