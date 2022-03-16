namespace CMCPS.Default {
    export interface BedForm {
        BedNumber: Serenity.StringEditor;
        Note: Serenity.StringEditor;
    }

    export class BedForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Bed';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BedForm.init)  {
                BedForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(BedForm, [
                    'BedNumber', w0,
                    'Note', w0
                ]);
            }
        }
    }
}

