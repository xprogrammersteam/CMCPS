namespace CMCPS.Default {
    export interface TreatmentForm {
        AdmissionId: Serenity.LookupEditor;
        EntryDate: Serenity.DateEditor;
        Age: Serenity.StringEditor;
        Sex: Serenity.StringEditor;
        AdmissionDate: Serenity.DateEditor;
        Weight: Serenity.StringEditor;
        BloodGroup: Serenity.StringEditor;
        PinNumber: Serenity.StringEditor;
        UnitNumber: Serenity.StringEditor;
        UnitRegNo: Serenity.StringEditor;
        BedNumber: Serenity.StringEditor;
        HospitalRegNo: Serenity.StringEditor;
        MedicineId: Serenity.LookupEditor;
        DoaseId: Serenity.LookupEditor;
        DurationId: Serenity.LookupEditor;
        AddToArea: Serenity.StringEditor;
        Treatment: Serenity.TextAreaEditor;
    }

    export class TreatmentForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Treatment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TreatmentForm.init)  {
                TreatmentForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(TreatmentForm, [
                    'AdmissionId', w0,
                    'EntryDate', w1,
                    'Age', w2,
                    'Sex', w2,
                    'AdmissionDate', w1,
                    'Weight', w2,
                    'BloodGroup', w2,
                    'PinNumber', w2,
                    'UnitNumber', w2,
                    'UnitRegNo', w2,
                    'BedNumber', w2,
                    'HospitalRegNo', w2,
                    'MedicineId', w0,
                    'DoaseId', w0,
                    'DurationId', w0,
                    'AddToArea', w2,
                    'Treatment', w3
                ]);
            }
        }
    }
}

