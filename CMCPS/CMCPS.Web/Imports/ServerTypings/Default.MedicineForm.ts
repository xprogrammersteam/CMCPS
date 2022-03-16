namespace CMCPS.Default {
    export interface MedicineForm {
        MedicineName: Serenity.StringEditor;
    }

    export class MedicineForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Medicine';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MedicineForm.init)  {
                MedicineForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(MedicineForm, [
                    'MedicineName', w0
                ]);
            }
        }
    }
}

