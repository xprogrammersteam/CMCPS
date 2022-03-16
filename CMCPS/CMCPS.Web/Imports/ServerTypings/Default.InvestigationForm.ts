namespace CMCPS.Default {
    export interface InvestigationForm {
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
        OtherLab: OtherLabWithInvestigationEditor;
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
        Pathology: PathologyAndInvestigationDetailsEditor;
    }

    export class InvestigationForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Investigation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvestigationForm.init)  {
                InvestigationForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = OtherLabWithInvestigationEditor;
                var w4 = PathologyAndInvestigationDetailsEditor;

                Q.initFormType(InvestigationForm, [
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
                    'OtherLab', w3,
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
                    'Pathology', w4
                ]);
            }
        }
    }
}

