namespace CMCPS.Default {
    export interface FurtherPlanForm {
        FurtherPlanName: Serenity.StringEditor;
    }

    export class FurtherPlanForm extends Serenity.PrefixedContext {
        static formKey = 'Default.FurtherPlan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FurtherPlanForm.init)  {
                FurtherPlanForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(FurtherPlanForm, [
                    'FurtherPlanName', w0
                ]);
            }
        }
    }
}

