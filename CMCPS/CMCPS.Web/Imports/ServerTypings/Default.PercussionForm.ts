namespace CMCPS.Default {
    export interface PercussionForm {
        PercussionName: Serenity.StringEditor;
    }

    export class PercussionForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Percussion';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PercussionForm.init)  {
                PercussionForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PercussionForm, [
                    'PercussionName', w0
                ]);
            }
        }
    }
}

