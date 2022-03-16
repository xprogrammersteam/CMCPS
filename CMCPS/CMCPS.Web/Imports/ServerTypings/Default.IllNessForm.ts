namespace CMCPS.Default {
    export interface IllNessForm {
        IllnessName: Serenity.StringEditor;
    }

    export class IllNessForm extends Serenity.PrefixedContext {
        static formKey = 'Default.IllNess';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!IllNessForm.init)  {
                IllNessForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(IllNessForm, [
                    'IllnessName', w0
                ]);
            }
        }
    }
}

