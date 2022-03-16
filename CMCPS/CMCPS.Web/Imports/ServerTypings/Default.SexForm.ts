namespace CMCPS.Default {
    export interface SexForm {
        Sex: Serenity.StringEditor;
        Note: Serenity.StringEditor;
    }

    export class SexForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Sex';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SexForm.init)  {
                SexForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SexForm, [
                    'Sex', w0,
                    'Note', w0
                ]);
            }
        }
    }
}

