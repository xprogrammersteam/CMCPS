namespace CMCPS.Default {
    export interface OpdForm {
        Name: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        Age: Serenity.StringEditor;
        SexId: Serenity.LookupEditor;
        BodyWt: Serenity.StringEditor;
        RegNo: Serenity.StringEditor;
        UnitId: Serenity.LookupEditor;
        PatientType: Serenity.EnumEditor;
        DistrictId: Serenity.LookupEditor;
        UpazilaId: Serenity.LookupEditor;
        House: Serenity.StringEditor;
        PostOffice: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        DiagnosisDetails: OpdWithDiagnosisDetailsEditor;
        History: Serenity.TextAreaEditor;
        Examination: Serenity.TextAreaEditor;
        Investigation: Serenity.TextAreaEditor;
        Advice: Serenity.TextAreaEditor;
        Remarks: Serenity.TextAreaEditor;
    }

    export class OpdForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Opd';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OpdForm.init)  {
                OpdForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = s.EnumEditor;
                var w4 = OpdWithDiagnosisDetailsEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(OpdForm, [
                    'Name', w0,
                    'Date', w1,
                    'Age', w0,
                    'SexId', w2,
                    'BodyWt', w0,
                    'RegNo', w0,
                    'UnitId', w2,
                    'PatientType', w3,
                    'DistrictId', w2,
                    'UpazilaId', w2,
                    'House', w0,
                    'PostOffice', w0,
                    'Mobile', w0,
                    'DiagnosisDetails', w4,
                    'History', w5,
                    'Examination', w5,
                    'Investigation', w5,
                    'Advice', w5,
                    'Remarks', w5
                ]);
            }
        }
    }
}

