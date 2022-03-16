namespace CMCPS.Default {
    export interface AdmissionCcDetailsForm {
        PrComplaintsId: Serenity.LookupEditor;
        Days: Serenity.StringEditor;
    }

    export class AdmissionCcDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.AdmissionCcDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AdmissionCcDetailsForm.init)  {
                AdmissionCcDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(AdmissionCcDetailsForm, [
                    'PrComplaintsId', w0,
                    'Days', w1
                ]);
            }
        }
    }
}

