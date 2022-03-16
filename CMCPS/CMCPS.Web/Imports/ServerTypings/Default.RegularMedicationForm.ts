namespace CMCPS.Default {
    export interface RegularMedicationForm {
        RegularMedicationName: Serenity.StringEditor;
    }

    export class RegularMedicationForm extends Serenity.PrefixedContext {
        static formKey = 'Default.RegularMedication';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RegularMedicationForm.init)  {
                RegularMedicationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(RegularMedicationForm, [
                    'RegularMedicationName', w0
                ]);
            }
        }
    }
}

