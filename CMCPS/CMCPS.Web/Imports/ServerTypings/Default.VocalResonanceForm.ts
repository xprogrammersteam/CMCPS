namespace CMCPS.Default {
    export interface VocalResonanceForm {
        VocalResonanceName: Serenity.StringEditor;
    }

    export class VocalResonanceForm extends Serenity.PrefixedContext {
        static formKey = 'Default.VocalResonance';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VocalResonanceForm.init)  {
                VocalResonanceForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(VocalResonanceForm, [
                    'VocalResonanceName', w0
                ]);
            }
        }
    }
}

