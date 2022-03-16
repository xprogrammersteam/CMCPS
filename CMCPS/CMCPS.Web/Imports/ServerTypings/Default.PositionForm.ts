namespace CMCPS.Default {
    export interface PositionForm {
        PositionName: Serenity.StringEditor;
    }

    export class PositionForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Position';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PositionForm.init)  {
                PositionForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PositionForm, [
                    'PositionName', w0
                ]);
            }
        }
    }
}

