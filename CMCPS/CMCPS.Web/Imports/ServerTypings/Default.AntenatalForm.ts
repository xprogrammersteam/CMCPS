namespace CMCPS.Default {
    export interface AntenatalForm {
        AntenatalName: Serenity.StringEditor;
    }

    export class AntenatalForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Antenatal';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AntenatalForm.init)  {
                AntenatalForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AntenatalForm, [
                    'AntenatalName', w0
                ]);
            }
        }
    }
}

