namespace CMCPS.Default {
    export interface AuscultationForm {
        AuscultationName: Serenity.StringEditor;
    }

    export class AuscultationForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Auscultation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AuscultationForm.init)  {
                AuscultationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AuscultationForm, [
                    'AuscultationName', w0
                ]);
            }
        }
    }
}

