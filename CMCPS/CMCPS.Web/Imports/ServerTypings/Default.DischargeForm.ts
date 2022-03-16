namespace CMCPS.Default {
    export interface DischargeForm {
        AdmissionId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
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
        Cbc: Serenity.StringEditor;
        Creatinine: Serenity.StringEditor;
        Urea: Serenity.StringEditor;
        Sugar: Serenity.StringEditor;
        Albumin: Serenity.StringEditor;
        Calcium: Serenity.StringEditor;
        BloodCulture: Serenity.StringEditor;
        Crp: Serenity.StringEditor;
        Bt: Serenity.StringEditor;
        Ct: Serenity.StringEditor;
        ProthrombinTime: Serenity.StringEditor;
        Aptt: Serenity.StringEditor;
        OptionToAddHematology: Serenity.StringEditor;
        Na: Serenity.StringEditor;
        K: Serenity.StringEditor;
        Cl: Serenity.StringEditor;
        HCO3: Serenity.StringEditor;
        Cxr: Serenity.StringEditor;
        Axr: Serenity.StringEditor;
        XrayKub: Serenity.StringEditor;
        Usg: Serenity.StringEditor;
        BaEnema: Serenity.StringEditor;
        BaMealFollowThrough: Serenity.StringEditor;
        Mcu: Serenity.StringEditor;
        Rgu: Serenity.StringEditor;
        Ivu: Serenity.StringEditor;
        CtScan: Serenity.StringEditor;
        Mri: Serenity.StringEditor;
        OptionToAddImaging: Serenity.StringEditor;
        OperationId: Serenity.LookupEditor;
        OperationDate: Serenity.DateEditor;
        Findings: Serenity.TextAreaEditor;
        Procedures: Serenity.TextAreaEditor;
        Diagnosis: Serenity.TextAreaEditor;
        Indication: Serenity.TextAreaEditor;
        Anesthesia: Serenity.TextAreaEditor;
        Position: Serenity.TextAreaEditor;
        Incision: Serenity.TextAreaEditor;
        Histopathology: Serenity.TextAreaEditor;
        SpecialNote: Serenity.TextAreaEditor;
        Instructions: Serenity.TextAreaEditor;
        FurtherPlan: Serenity.TextAreaEditor;
        TreatmentContinues: Serenity.TextAreaEditor;
        MedicineId: Serenity.LookupEditor;
        DoaseId: Serenity.LookupEditor;
        DurationId: Serenity.LookupEditor;
        Meal: Serenity.LookupEditor;
        AddToArea: Serenity.StringEditor;
        Advice: Serenity.TextAreaEditor;
    }

    export class DischargeForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Discharge';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DischargeForm.init)  {
                DischargeForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(DischargeForm, [
                    'AdmissionId', w0,
                    'Date', w1,
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
                    'Cbc', w2,
                    'Creatinine', w2,
                    'Urea', w2,
                    'Sugar', w2,
                    'Albumin', w2,
                    'Calcium', w2,
                    'BloodCulture', w2,
                    'Crp', w2,
                    'Bt', w2,
                    'Ct', w2,
                    'ProthrombinTime', w2,
                    'Aptt', w2,
                    'OptionToAddHematology', w2,
                    'Na', w2,
                    'K', w2,
                    'Cl', w2,
                    'HCO3', w2,
                    'Cxr', w2,
                    'Axr', w2,
                    'XrayKub', w2,
                    'Usg', w2,
                    'BaEnema', w2,
                    'BaMealFollowThrough', w2,
                    'Mcu', w2,
                    'Rgu', w2,
                    'Ivu', w2,
                    'CtScan', w2,
                    'Mri', w2,
                    'OptionToAddImaging', w2,
                    'OperationId', w0,
                    'OperationDate', w1,
                    'Findings', w3,
                    'Procedures', w3,
                    'Diagnosis', w3,
                    'Indication', w3,
                    'Anesthesia', w3,
                    'Position', w3,
                    'Incision', w3,
                    'Histopathology', w3,
                    'SpecialNote', w3,
                    'Instructions', w3,
                    'FurtherPlan', w3,
                    'TreatmentContinues', w3,
                    'MedicineId', w0,
                    'DoaseId', w0,
                    'DurationId', w0,
                    'Meal', w0,
                    'AddToArea', w2,
                    'Advice', w3
                ]);
            }
        }
    }
}

