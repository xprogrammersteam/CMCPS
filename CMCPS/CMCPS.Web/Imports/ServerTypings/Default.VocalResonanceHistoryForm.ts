namespace CMCPS.Default {
    export interface VocalResonanceHistoryForm {
        AdmissionId: Serenity.IntegerEditor;
        VocalResonanceId: Serenity.IntegerEditor;
    }

    export class VocalResonanceHistoryForm extends Serenity.PrefixedContext {
        static formKey = 'Default.VocalResonanceHistory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VocalResonanceHistoryForm.init)  {
                VocalResonanceHistoryForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(VocalResonanceHistoryForm, [
                    'AdmissionId', w0,
                    'VocalResonanceId', w0
                ]);
            }
        }
    }
}

