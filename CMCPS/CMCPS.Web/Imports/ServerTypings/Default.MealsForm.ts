namespace CMCPS.Default {
    export interface MealsForm {
        MealName: Serenity.StringEditor;
    }

    export class MealsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Meals';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MealsForm.init)  {
                MealsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(MealsForm, [
                    'MealName', w0
                ]);
            }
        }
    }
}

