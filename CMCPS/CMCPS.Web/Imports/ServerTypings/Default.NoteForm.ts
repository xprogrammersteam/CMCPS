namespace CMCPS.Default {
    export interface NoteForm {
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
        PNoteId: Serenity.LookupEditor;
        AddtoNote: Serenity.StringEditor;
        Note: Serenity.TextAreaEditor;
    }

    export class NoteForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Note';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NoteForm.init)  {
                NoteForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(NoteForm, [
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
                    'PNoteId', w0,
                    'AddtoNote', w2,
                    'Note', w3
                ]);
            }
        }
    }
}

