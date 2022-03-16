namespace CMCPS.Default {
    export interface FollowUpForm {
        AdmissionId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        Age: Serenity.StringEditor;
        Sex: Serenity.StringEditor;
        Weight: Serenity.StringEditor;
        BloodGroup: Serenity.StringEditor;
        AdmissionDate: Serenity.DateEditor;
        PinNumber: Serenity.StringEditor;
        UnitNumber: Serenity.StringEditor;
        UnitRegNo: Serenity.StringEditor;
        BedNumber: Serenity.StringEditor;
        HospitalRegNo: Serenity.StringEditor;
        DiagnosisId: Serenity.LookupEditor;
        AddtoDiagnosis: Serenity.StringEditor;
        ChiefComplaintId: Serenity.LookupEditor;
        AddtoComplaint: Serenity.StringEditor;
        Diagnosis: Serenity.TextAreaEditor;
        ChiefComplaint: Serenity.TextAreaEditor;
        Exam: Serenity.TextAreaEditor;
        Advice: Serenity.TextAreaEditor;
        Note: Serenity.TextAreaEditor;
        Plan: Serenity.TextAreaEditor;
    }

    export class FollowUpForm extends Serenity.PrefixedContext {
        static formKey = 'Default.FollowUp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FollowUpForm.init)  {
                FollowUpForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(FollowUpForm, [
                    'AdmissionId', w0,
                    'Date', w1,
                    'Age', w2,
                    'Sex', w2,
                    'Weight', w2,
                    'BloodGroup', w2,
                    'AdmissionDate', w1,
                    'PinNumber', w2,
                    'UnitNumber', w2,
                    'UnitRegNo', w2,
                    'BedNumber', w2,
                    'HospitalRegNo', w2,
                    'DiagnosisId', w0,
                    'AddtoDiagnosis', w2,
                    'ChiefComplaintId', w0,
                    'AddtoComplaint', w2,
                    'Diagnosis', w3,
                    'ChiefComplaint', w3,
                    'Exam', w3,
                    'Advice', w3,
                    'Note', w3,
                    'Plan', w3
                ]);
            }
        }
    }
}

