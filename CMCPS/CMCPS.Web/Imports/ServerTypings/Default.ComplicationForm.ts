namespace CMCPS.Default {
    export interface ComplicationForm {
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
        FinalDiagnosis: Serenity.TextAreaEditor;
        ComplicationNoteId: Serenity.LookupEditor;
        AddtoComplication: Serenity.StringEditor;
        ComplicationName: Serenity.TextAreaEditor;
    }

    export class ComplicationForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Complication';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ComplicationForm.init)  {
                ComplicationForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(ComplicationForm, [
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
                    'FinalDiagnosis', w3,
                    'ComplicationNoteId', w0,
                    'AddtoComplication', w2,
                    'ComplicationName', w3
                ]);
            }
        }
    }
}

