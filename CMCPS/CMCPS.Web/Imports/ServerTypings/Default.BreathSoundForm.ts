namespace CMCPS.Default {
    export interface BreathSoundForm {
        BreathSoundName: Serenity.StringEditor;
    }

    export class BreathSoundForm extends Serenity.PrefixedContext {
        static formKey = 'Default.BreathSound';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BreathSoundForm.init)  {
                BreathSoundForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(BreathSoundForm, [
                    'BreathSoundName', w0
                ]);
            }
        }
    }
}

