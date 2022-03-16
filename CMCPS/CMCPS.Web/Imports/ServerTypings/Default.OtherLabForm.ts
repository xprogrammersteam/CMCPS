namespace CMCPS.Default {
    export interface OtherLabForm {
        Name: Serenity.StringEditor;
    }

    export class OtherLabForm extends Serenity.PrefixedContext {
        static formKey = 'Default.OtherLab';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OtherLabForm.init)  {
                OtherLabForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(OtherLabForm, [
                    'Name', w0
                ]);
            }
        }
    }
}

