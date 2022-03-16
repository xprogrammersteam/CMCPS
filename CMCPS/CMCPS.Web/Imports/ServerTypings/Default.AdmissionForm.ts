namespace CMCPS.Default {
    export interface AdmissionForm {
        Name: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        Time: EditTimeEditor;
        Age: Serenity.StringEditor;
        DateOfBirth: Serenity.DateEditor;
        SexId: Serenity.LookupEditor;
        Religion: Serenity.EnumEditor;
        MaritalStatus: Serenity.EnumEditor;
        WardId: Serenity.LookupEditor;
        BedId: Serenity.LookupEditor;
        BloodGroupId: Serenity.LookupEditor;
        FatherName: Serenity.StringEditor;
        FatherNID: Serenity.StringEditor;
        MotherName: Serenity.StringEditor;
        MotherNID: Serenity.StringEditor;
        DistrictId: Serenity.LookupEditor;
        UpazilaId: Serenity.LookupEditor;
        House: Serenity.StringEditor;
        PostOffice: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        EmergencyPerson: Serenity.StringEditor;
        EmergencyRelation: Serenity.EnumEditor;
        EmergencyPerMobile: Serenity.StringEditor;
        EmergencyPerAddress: Serenity.TextAreaEditor;
        DetailList: AdmissionCcDetailEditor;
        HistoryOfPresentIllness: Serenity.TextAreaEditor;
        IllnessList: Serenity.LookupEditor;
        MajorSurgeryId: Serenity.LookupEditor;
        AddtoMajorSurgery: Serenity.StringEditor;
        MajorSurgery: Serenity.TextAreaEditor;
        RegularMedicationId: Serenity.LookupEditor;
        BloodTransfusion: Serenity.EnumEditor;
        ImmunizationList: Serenity.LookupEditor;
        FamilyHistoryDiseaseId: Serenity.EnumEditor;
        AgeAtMenarche: Serenity.StringEditor;
        AgeAtMenarcheLabel: Serenity.StringEditor;
        MenarcheCycle: Serenity.EnumEditor;
        AgeOfMenopause: Serenity.StringEditor;
        AgeAtMenarcheLabel1: Serenity.StringEditor;
        AgeOfLastChild: Serenity.StringEditor;
        AgeAtMenarcheLabel2: Serenity.StringEditor;
        LMP: Serenity.DateEditor;
        PPDetailList: AdmissionPpDetailEditor;
        Socioeconomichistory: Serenity.TextAreaEditor;
        Travelhistory: Serenity.TextAreaEditor;
        AntenatalList: Serenity.LookupEditor;
        NatalList: Serenity.LookupEditor;
        PostNatalList: Serenity.LookupEditor;
        Milestone: Serenity.TextAreaEditor;
        HoPastIllness: Serenity.TextAreaEditor;
        Immunization: Serenity.EnumEditor;
        Feedinghistory: Serenity.EnumEditor;
        DrugHistory: Serenity.TextAreaEditor;
        FamilyHistoryId: Serenity.LookupEditor;
        ConsanguinityId: Serenity.LookupEditor;
        AllergicHistory: Serenity.TextAreaEditor;
        SocialPersonalHistory: Serenity.TextAreaEditor;
        Conditions: Serenity.TextAreaEditor;
        Appearance: Serenity.EnumEditor;
        Decubitus: Serenity.EnumEditor;
        Behaviour: Serenity.EnumEditor;
        BodyBuild: Serenity.EnumEditor;
        BMI: Serenity.StringEditor;
        AnemiaId: Serenity.LookupEditor;
        JaundiceId: Serenity.LookupEditor;
        Cyanosis: Serenity.EnumEditor;
        DehydrationId: Serenity.EnumEditor;
        OedemaId: Serenity.LookupEditor;
        Clubbing: Serenity.EnumEditor;
        Koilonychia: Serenity.EnumEditor;
        Leukonychia: Serenity.EnumEditor;
        Edema: Serenity.EnumEditor;
        NeckVeins: Serenity.EnumEditor;
        JVP: Serenity.EnumEditor;
        BonyTenderness: Serenity.EnumEditor;
        LymphNode: Serenity.EnumEditor;
        Site: Serenity.EnumEditor;
        Size: Serenity.StringEditor;
        Tenderness: Serenity.EnumEditor;
        Consistency: Serenity.EnumEditor;
        Fixation: Serenity.EnumEditor;
        LocalTemperature: Serenity.EnumEditor;
        DischargingSinus: Serenity.EnumEditor;
        ThyroidGland: Serenity.EnumEditor;
        Pulse: Serenity.StringEditor;
        RespRate: Serenity.StringEditor;
        BP: Serenity.StringEditor;
        Temperature: Serenity.StringEditor;
        GEOther: Serenity.TextAreaEditor;
        ExaminationRegion: Serenity.EnumEditor;
        Inspection: Serenity.TextAreaEditor;
        Palpation: Serenity.TextAreaEditor;
        Percussion: Serenity.TextAreaEditor;
        Auscultation: Serenity.TextAreaEditor;
        Other: Serenity.TextAreaEditor;
        IsNAD: Serenity.BooleanEditor;
        RR: Serenity.IntegerEditor;
        Muscles: Serenity.EnumEditor;
        Stridor: Serenity.EnumEditor;
        CyanosisReSelect: Serenity.EnumEditor;
        ClubbingReSelect: Serenity.EnumEditor;
        NicotineStain: Serenity.EnumEditor;
        Asterixis: Serenity.EnumEditor;
        JVPReSelect: Serenity.EnumEditor;
        LymphReSelect: Serenity.EnumEditor;
        ScarMark: Serenity.EnumEditor;
        Swelling: Serenity.EnumEditor;
        ShapeChest: Serenity.EnumEditor;
        VisibleVein: Serenity.EnumEditor;
        ApexBeat: Serenity.EnumEditor;
        SupraclavicularIndrawing: Serenity.EnumEditor;
        TrachealTag: Serenity.EnumEditor;
        ICTSitu: Serenity.EnumEditor;
        RadiationMark: Serenity.EnumEditor;
        PositionTrachea: Serenity.EnumEditor;
        PositionApexBeat: Serenity.EnumEditor;
        VocalFremitus: Serenity.EnumEditor;
        ChestExpansibility: Serenity.EnumEditor;
        PercussionList: Serenity.LookupEditor;
        AuscultationList: Serenity.LookupEditor;
        BreathSoundList: Serenity.LookupEditor;
        VocalResonanceList: Serenity.LookupEditor;
        AddedSound: Serenity.EnumEditor;
        Rhonchi: Serenity.EnumEditor;
        Crepitation: Serenity.EnumEditor;
        Rub: Serenity.EnumEditor;
        Skin: Serenity.EnumEditor;
        SkinText: Serenity.StringEditor;
        PulseRate: Serenity.IntegerEditor;
        Rhythm: Serenity.EnumEditor;
        Volume: Serenity.EnumEditor;
        Character: Serenity.EnumEditor;
        RedioFemoralDelay: Serenity.EnumEditor;
        ConditionOf: Serenity.EnumEditor;
        ScarMarkPrecordium: Serenity.EnumEditor;
        SwellingPrecordium: Serenity.EnumEditor;
        VisibleApexBeatPrecordium: Serenity.EnumEditor;
        VisibleImpulsePrecordium: Serenity.EnumEditor;
        Alimentary: Serenity.TextAreaEditor;
        Respiratory: Serenity.TextAreaEditor;
        Cardiovascular: Serenity.TextAreaEditor;
        Genitourinary: Serenity.TextAreaEditor;
        Locomotor: Serenity.TextAreaEditor;
        Haemopoetic: Serenity.TextAreaEditor;
        SalientFeatures: Serenity.TextAreaEditor;
        ProvisionalDiagnosis: Serenity.TextAreaEditor;
        DiagnosisDetails: DDiagnosisDetailEditor;
        Investigations: Serenity.TextAreaEditor;
        FinalDiagnosis: Serenity.TextAreaEditor;
        Plandischarge: Serenity.TextAreaEditor;
        Summary: Serenity.TextAreaEditor;
    }

    export class AdmissionForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Admission';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AdmissionForm.init)  {
                AdmissionForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = EditTimeEditor;
                var w3 = s.LookupEditor;
                var w4 = s.EnumEditor;
                var w5 = s.TextAreaEditor;
                var w6 = AdmissionCcDetailEditor;
                var w7 = AdmissionPpDetailEditor;
                var w8 = s.BooleanEditor;
                var w9 = s.IntegerEditor;
                var w10 = DDiagnosisDetailEditor;

                Q.initFormType(AdmissionForm, [
                    'Name', w0,
                    'Date', w1,
                    'Time', w2,
                    'Age', w0,
                    'DateOfBirth', w1,
                    'SexId', w3,
                    'Religion', w4,
                    'MaritalStatus', w4,
                    'WardId', w3,
                    'BedId', w3,
                    'BloodGroupId', w3,
                    'FatherName', w0,
                    'FatherNID', w0,
                    'MotherName', w0,
                    'MotherNID', w0,
                    'DistrictId', w3,
                    'UpazilaId', w3,
                    'House', w0,
                    'PostOffice', w0,
                    'Mobile', w0,
                    'EmergencyPerson', w0,
                    'EmergencyRelation', w4,
                    'EmergencyPerMobile', w0,
                    'EmergencyPerAddress', w5,
                    'DetailList', w6,
                    'HistoryOfPresentIllness', w5,
                    'IllnessList', w3,
                    'MajorSurgeryId', w3,
                    'AddtoMajorSurgery', w0,
                    'MajorSurgery', w5,
                    'RegularMedicationId', w3,
                    'BloodTransfusion', w4,
                    'ImmunizationList', w3,
                    'FamilyHistoryDiseaseId', w4,
                    'AgeAtMenarche', w0,
                    'AgeAtMenarcheLabel', w0,
                    'MenarcheCycle', w4,
                    'AgeOfMenopause', w0,
                    'AgeAtMenarcheLabel1', w0,
                    'AgeOfLastChild', w0,
                    'AgeAtMenarcheLabel2', w0,
                    'LMP', w1,
                    'PPDetailList', w7,
                    'Socioeconomichistory', w5,
                    'Travelhistory', w5,
                    'AntenatalList', w3,
                    'NatalList', w3,
                    'PostNatalList', w3,
                    'Milestone', w5,
                    'HoPastIllness', w5,
                    'Immunization', w4,
                    'Feedinghistory', w4,
                    'DrugHistory', w5,
                    'FamilyHistoryId', w3,
                    'ConsanguinityId', w3,
                    'AllergicHistory', w5,
                    'SocialPersonalHistory', w5,
                    'Conditions', w5,
                    'Appearance', w4,
                    'Decubitus', w4,
                    'Behaviour', w4,
                    'BodyBuild', w4,
                    'BMI', w0,
                    'AnemiaId', w3,
                    'JaundiceId', w3,
                    'Cyanosis', w4,
                    'DehydrationId', w4,
                    'OedemaId', w3,
                    'Clubbing', w4,
                    'Koilonychia', w4,
                    'Leukonychia', w4,
                    'Edema', w4,
                    'NeckVeins', w4,
                    'JVP', w4,
                    'BonyTenderness', w4,
                    'LymphNode', w4,
                    'Site', w4,
                    'Size', w0,
                    'Tenderness', w4,
                    'Consistency', w4,
                    'Fixation', w4,
                    'LocalTemperature', w4,
                    'DischargingSinus', w4,
                    'ThyroidGland', w4,
                    'Pulse', w0,
                    'RespRate', w0,
                    'BP', w0,
                    'Temperature', w0,
                    'GEOther', w5,
                    'ExaminationRegion', w4,
                    'Inspection', w5,
                    'Palpation', w5,
                    'Percussion', w5,
                    'Auscultation', w5,
                    'Other', w5,
                    'IsNAD', w8,
                    'RR', w9,
                    'Muscles', w4,
                    'Stridor', w4,
                    'CyanosisReSelect', w4,
                    'ClubbingReSelect', w4,
                    'NicotineStain', w4,
                    'Asterixis', w4,
                    'JVPReSelect', w4,
                    'LymphReSelect', w4,
                    'ScarMark', w4,
                    'Swelling', w4,
                    'ShapeChest', w4,
                    'VisibleVein', w4,
                    'ApexBeat', w4,
                    'SupraclavicularIndrawing', w4,
                    'TrachealTag', w4,
                    'ICTSitu', w4,
                    'RadiationMark', w4,
                    'PositionTrachea', w4,
                    'PositionApexBeat', w4,
                    'VocalFremitus', w4,
                    'ChestExpansibility', w4,
                    'PercussionList', w3,
                    'AuscultationList', w3,
                    'BreathSoundList', w3,
                    'VocalResonanceList', w3,
                    'AddedSound', w4,
                    'Rhonchi', w4,
                    'Crepitation', w4,
                    'Rub', w4,
                    'Skin', w4,
                    'SkinText', w0,
                    'PulseRate', w9,
                    'Rhythm', w4,
                    'Volume', w4,
                    'Character', w4,
                    'RedioFemoralDelay', w4,
                    'ConditionOf', w4,
                    'ScarMarkPrecordium', w4,
                    'SwellingPrecordium', w4,
                    'VisibleApexBeatPrecordium', w4,
                    'VisibleImpulsePrecordium', w4,
                    'Alimentary', w5,
                    'Respiratory', w5,
                    'Cardiovascular', w5,
                    'Genitourinary', w5,
                    'Locomotor', w5,
                    'Haemopoetic', w5,
                    'SalientFeatures', w5,
                    'ProvisionalDiagnosis', w5,
                    'DiagnosisDetails', w10,
                    'Investigations', w5,
                    'FinalDiagnosis', w5,
                    'Plandischarge', w5,
                    'Summary', w5
                ]);
            }
        }
    }
}

