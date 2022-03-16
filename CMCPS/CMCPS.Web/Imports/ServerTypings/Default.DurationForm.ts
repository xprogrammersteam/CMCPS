namespace CMCPS.Default {
    export interface DurationForm {
        DurationName: Serenity.StringEditor;
    }

    export class DurationForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Duration';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DurationForm.init)  {
                DurationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(DurationForm, [
                    'DurationName', w0
                ]);
            }
        }
    }
}

