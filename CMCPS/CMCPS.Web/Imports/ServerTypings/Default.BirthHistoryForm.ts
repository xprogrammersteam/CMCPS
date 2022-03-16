namespace CMCPS.Default {
    export interface BirthHistoryForm {
        BirthHistory: Serenity.StringEditor;
        Note: Serenity.StringEditor;
    }

    export class BirthHistoryForm extends Serenity.PrefixedContext {
        static formKey = 'Default.BirthHistory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BirthHistoryForm.init)  {
                BirthHistoryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(BirthHistoryForm, [
                    'BirthHistory', w0,
                    'Note', w0
                ]);
            }
        }
    }
}

