namespace CMCPS.Default {
    export interface DistrictForm {
        DistrictName: Serenity.StringEditor;
    }

    export class DistrictForm extends Serenity.PrefixedContext {
        static formKey = 'Default.District';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DistrictForm.init)  {
                DistrictForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(DistrictForm, [
                    'DistrictName', w0
                ]);
            }
        }
    }
}

