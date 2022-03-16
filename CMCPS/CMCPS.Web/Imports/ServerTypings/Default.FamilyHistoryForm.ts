namespace CMCPS.Default {
    export interface FamilyHistoryForm {
        FamilyHistory: Serenity.StringEditor;
        Note: Serenity.StringEditor;
    }

    export class FamilyHistoryForm extends Serenity.PrefixedContext {
        static formKey = 'Default.FamilyHistory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FamilyHistoryForm.init)  {
                FamilyHistoryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(FamilyHistoryForm, [
                    'FamilyHistory', w0,
                    'Note', w0
                ]);
            }
        }
    }
}

