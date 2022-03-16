namespace CMCPS.Default {
    export interface UpazilaForm {
        DistrictId: Serenity.LookupEditor;
        UpazilaName: Serenity.StringEditor;
    }

    export class UpazilaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Upazila';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UpazilaForm.init)  {
                UpazilaForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(UpazilaForm, [
                    'DistrictId', w0,
                    'UpazilaName', w1
                ]);
            }
        }
    }
}

