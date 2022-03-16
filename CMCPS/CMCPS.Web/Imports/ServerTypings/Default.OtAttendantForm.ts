namespace CMCPS.Default {
    export interface OtAttendantForm {
        OtAttendantName: Serenity.StringEditor;
    }

    export class OtAttendantForm extends Serenity.PrefixedContext {
        static formKey = 'Default.OtAttendant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OtAttendantForm.init)  {
                OtAttendantForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(OtAttendantForm, [
                    'OtAttendantName', w0
                ]);
            }
        }
    }
}

