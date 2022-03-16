namespace CMCPS.Default {
    export interface OperationForm {
        OperationName: Serenity.StringEditor;
        Findings: Serenity.TextAreaEditor;
        Procedures: Serenity.TextAreaEditor;
    }

    export class OperationForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Operation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OperationForm.init)  {
                OperationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(OperationForm, [
                    'OperationName', w0,
                    'Findings', w1,
                    'Procedures', w1
                ]);
            }
        }
    }
}

