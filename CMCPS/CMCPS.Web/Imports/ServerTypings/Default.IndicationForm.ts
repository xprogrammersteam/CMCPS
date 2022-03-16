namespace CMCPS.Default {
    export interface IndicationForm {
        IndicationName: Serenity.StringEditor;
    }

    export class IndicationForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Indication';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!IndicationForm.init)  {
                IndicationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(IndicationForm, [
                    'IndicationName', w0
                ]);
            }
        }
    }
}

