namespace CMCPS.Default {
    export interface InstructionsForm {
        InstructionsName: Serenity.StringEditor;
    }

    export class InstructionsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Instructions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InstructionsForm.init)  {
                InstructionsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(InstructionsForm, [
                    'InstructionsName', w0
                ]);
            }
        }
    }
}

