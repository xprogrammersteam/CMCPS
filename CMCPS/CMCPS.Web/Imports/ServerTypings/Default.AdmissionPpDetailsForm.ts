namespace CMCPS.Default {
    export interface AdmissionPpDetailsForm {
        ActivityId: Serenity.EnumEditor;
        SmokingId: Serenity.IntegerEditor;
        AlcoholismId: Serenity.IntegerEditor;
        DrugAddictionId: Serenity.EnumEditor;
        ExposureHistoryId: Serenity.EnumEditor;
    }

    export class AdmissionPpDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.AdmissionPpDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AdmissionPpDetailsForm.init)  {
                AdmissionPpDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(AdmissionPpDetailsForm, [
                    'ActivityId', w0,
                    'SmokingId', w1,
                    'AlcoholismId', w1,
                    'DrugAddictionId', w0,
                    'ExposureHistoryId', w0
                ]);
            }
        }
    }
}

