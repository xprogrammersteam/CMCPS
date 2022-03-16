namespace CMCPS.Default {
    export interface AdmissionRow {
        AdmissionId?: number;
        DischargeId?: number;
        OperationId?: number;
        OperationNoteId?: number;
        Date?: string;
        LMP?: string;
        DischargeDate?: string;
        Time?: string;
        Name?: string;
        NameAndPin?: string;
        Age?: string;
        DateOfBirth?: string;
        SexId?: number;
        Religion?: Modules.Default.Admission.Religion;
        MaritalStatus?: Modules.Default.Admission.MaritalStatus;
        BloodTransfusion?: Modules.Default.Admission.BloodTransfusion;
        EmergencyRelation?: Modules.Default.Admission.EmergencyContactRelation;
        WardId?: number;
        Ward?: string;
        Result?: Modules.Default.Admission.Result;
        LymphNode?: Modules.Default.Admission.LymphNode;
        Site?: Modules.Default.Admission.Site;
        ExaminationRegion?: Modules.Default.Admission.ExaminationRegion;
        Tenderness?: Modules.Default.Admission.GeneralPartEnum;
        Consistency?: Modules.Default.Admission.ConsistencyEnum;
        Fixation?: Modules.Default.Admission.FixationEnum;
        LocalTemperature?: Modules.Default.Admission.temperatureEnum;
        DischargingSinus?: Modules.Default.Admission.GeneralPartEnum;
        Sex?: string;
        Size?: string;
        PinNumber?: string;
        UnitId?: number;
        UnitNumber?: string;
        UnitRegNumber?: string;
        BedId?: number;
        BedNumber?: string;
        HospitalRegNumber?: string;
        FatherName?: string;
        FatherNID?: string;
        MotherName?: string;
        MotherNID?: string;
        DistrictId?: number;
        DistrictName?: string;
        UpazilaId?: number;
        UpazilaName?: string;
        House?: string;
        PostOffice?: string;
        Mobile?: string;
        AllergicHistory?: string;
        HistoryOfPresentIllness?: string;
        HoPastIllness?: string;
        DrugHistory?: string;
        AntenatalList?: number[];
        NatalList?: number[];
        ImmunizationList?: number[];
        PostNatalList?: number[];
        IllnessList?: number[];
        PercussionList?: number[];
        AuscultationList?: number[];
        BreathSoundList?: number[];
        VocalResonanceList?: number[];
        FamilyHistoryId?: number;
        FamilyHistory?: string;
        PatientType?: boolean;
        Immunization?: Modules.Default.Admission.Immunization;
        FamilyHistoryDiseaseId?: Modules.Default.Admission.FamilyHistoryDisease;
        Weight?: number;
        Height?: string;
        AnemiaId?: number;
        Anaemia?: string;
        JaundiceId?: number;
        Jaundice?: string;
        Cyanosis?: Modules.Default.Admission.CyanosisEnum;
        CyanosisReSelect?: Modules.Default.Admission.CyanosisEnum;
        Stridor?: Modules.Default.Admission.GeneralPartEnum;
        OedemaId?: number;
        NicotineStain?: Modules.Default.Admission.GeneralPartEnum;
        Asterixis?: Modules.Default.Admission.GeneralPartEnum;
        JVPReSelect?: Modules.Default.Admission.temperatureEnum;
        LymphReSelect?: Modules.Default.Admission.LymphEnum;
        Oedema?: string;
        DehydrationId?: Modules.Default.Admission.GeneralEnum;
        Clubbing?: Modules.Default.Admission.ClubbingEnum;
        ClubbingReSelect?: Modules.Default.Admission.ClubbingEnum;
        Koilonychia?: Modules.Default.Admission.GeneralPartEnum;
        Edema?: Modules.Default.Admission.GeneralEnum;
        NeckVeins?: Modules.Default.Admission.NeckveinsEnum;
        JVP?: Modules.Default.Admission.temperatureEnum;
        BonyTenderness?: Modules.Default.Admission.GeneralPartEnum;
        Leukonychia?: Modules.Default.Admission.GeneralPartEnum;
        ThyroidGland?: Modules.Default.Admission.LymphEnum;
        Dehydration?: string;
        BMI?: string;
        BloodGroupId?: number;
        RegularMedicationId?: number;
        BloodGroup?: string;
        RegularMedicationName?: string;
        Pulse?: string;
        BP?: string;
        RespRate?: string;
        Temperature?: string;
        Appearance?: Modules.Default.Admission.AppearanceEnum;
        BodyBuild?: Modules.Default.Admission.Bodybuilt;
        CoOperation?: string;
        Circumference?: string;
        Decubitus?: Modules.Default.Admission.DecuibitusEnum;
        Behaviour?: Modules.Default.Admission.Behaviour;
        SignMeningeal?: Modules.Default.Admission.SignMeningeal;
        Nutrition?: string;
        GEOther?: string;
        Inspection?: string;
        Palpation?: string;
        Percussion?: string;
        Auscultation?: string;
        Other?: string;
        Alimentary?: string;
        Milestone?: string;
        Muscles?: Modules.Default.Admission.MusclesEnum;
        SocialPersonalHistory?: string;
        Feedinghistory?: Modules.Default.Admission.FeedingHistory;
        Travelhistory?: string;
        ConsanguinityId?: number;
        Consanguinity?: string;
        Conditions?: string;
        Respiratory?: string;
        Cardiovascular?: string;
        Genitourinary?: string;
        Locomotor?: string;
        Haemopoetic?: string;
        Doctor?: string;
        SalientFeatures?: string;
        ProvisionalDiagnosis?: string;
        FinalDiagnosis?: string;
        Investigations?: string;
        Plandischarge?: string;
        Summary?: string;
        EmergencyPerson?: string;
        EmergencyPerAddress?: string;
        EmergencyPerMobile?: string;
        MajorSurgeryId?: number;
        AddtoMajorSurgery?: string;
        MajorSurgery?: string;
        Socioeconomichistory?: string;
        AgeAtMenarche?: string;
        AgeAtMenarcheLabel?: string;
        AgeAtMenarcheLabel1?: string;
        AgeAtMenarcheLabel2?: string;
        AgeOfMenopause?: string;
        AgeOfLastChild?: string;
        RR?: string;
        MenarcheCycle?: Modules.Default.Admission.MenarcheCycle;
        IsNAD?: boolean;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DetailList?: AdmissionCcDetailsRow[];
        PPDetailList?: AdmissionPpDetailsRow[];
        DiagnosisDetails?: DDiagnosisDetailsRow[];
        ScarMark?: Modules.Default.Admission.GeneralPartEnum;
        Swelling?: Modules.Default.Admission.GeneralPartEnum;
        ShapeChest?: Modules.Default.Admission.ShapeChest;
        VisibleVein?: Modules.Default.Admission.GeneralPartEnum;
        ApexBeat?: Modules.Default.Admission.GeneralPartEnum;
        SupraclavicularIndrawing?: Modules.Default.Admission.GeneralPartEnum;
        TrachealTag?: Modules.Default.Admission.GeneralPartEnum;
        ICTSitu?: Modules.Default.Admission.GeneralPartEnum;
        RadiationMark?: Modules.Default.Admission.GeneralPartEnum;
        PositionTrachea?: Modules.Default.Admission.PositionTrachea;
        PositionApexBeat?: Modules.Default.Admission.PositionApexBeat;
        VocalFremitus?: Modules.Default.Admission.VocalFremitus;
        ChestExpansibility?: Modules.Default.Admission.VocalFremitus;
        PercussionNote?: Modules.Default.Admission.Percussion;
        AddedSound?: Modules.Default.Admission.NoneDate;
        Rhonchi?: Modules.Default.Admission.GeneralPartEnum;
        Crepitation?: Modules.Default.Admission.GeneralPartEnum;
        Rub?: Modules.Default.Admission.GeneralPartEnum;
        Skin?: Modules.Default.Admission.SkinEnum;
        SkinText?: string;
        PulseRate?: string;
        Rhythm?: Modules.Default.Admission.MenarcheCycle;
        Volume?: Modules.Default.Admission.VolumeEnum;
        Character?: Modules.Default.Admission.CharacterEnum;
        RedioFemoralDelay?: Modules.Default.Admission.GeneralPartEnum;
        ConditionOf?: Modules.Default.Admission.ConditionEnum;
        BloodPressure?: string;
        NeckVenis?: Modules.Default.Admission.NeckVenisEnum;
        JVPReSelectCardiovascular?: Modules.Default.Admission.temperatureEnum;
        Thyroid?: Modules.Default.Admission.LymphEnum;
        ScarMarkPrecordium?: Modules.Default.Admission.GeneralPartEnum;
        SwellingPrecordium?: Modules.Default.Admission.GeneralPartEnum;
        VisibleApexBeatPrecordium?: Modules.Default.Admission.GeneralPartEnum;
        VisibleImpulsePrecordium?: Modules.Default.Admission.Precordium;
    }

    export namespace AdmissionRow {
        export const idProperty = 'AdmissionId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Admission';
        export const lookupKey = 'Default.Admission';

        export function getLookup(): Q.Lookup<AdmissionRow> {
            return Q.getLookup<AdmissionRow>('Default.Admission');
        }

        export declare const enum Fields {
            AdmissionId = "AdmissionId",
            DischargeId = "DischargeId",
            OperationId = "OperationId",
            OperationNoteId = "OperationNoteId",
            Date = "Date",
            LMP = "LMP",
            DischargeDate = "DischargeDate",
            Time = "Time",
            Name = "Name",
            NameAndPin = "NameAndPin",
            Age = "Age",
            DateOfBirth = "DateOfBirth",
            SexId = "SexId",
            Religion = "Religion",
            MaritalStatus = "MaritalStatus",
            BloodTransfusion = "BloodTransfusion",
            EmergencyRelation = "EmergencyRelation",
            WardId = "WardId",
            Ward = "Ward",
            Result = "Result",
            LymphNode = "LymphNode",
            Site = "Site",
            ExaminationRegion = "ExaminationRegion",
            Tenderness = "Tenderness",
            Consistency = "Consistency",
            Fixation = "Fixation",
            LocalTemperature = "LocalTemperature",
            DischargingSinus = "DischargingSinus",
            Sex = "Sex",
            Size = "Size",
            PinNumber = "PinNumber",
            UnitId = "UnitId",
            UnitNumber = "UnitNumber",
            UnitRegNumber = "UnitRegNumber",
            BedId = "BedId",
            BedNumber = "BedNumber",
            HospitalRegNumber = "HospitalRegNumber",
            FatherName = "FatherName",
            FatherNID = "FatherNID",
            MotherName = "MotherName",
            MotherNID = "MotherNID",
            DistrictId = "DistrictId",
            DistrictName = "DistrictName",
            UpazilaId = "UpazilaId",
            UpazilaName = "UpazilaName",
            House = "House",
            PostOffice = "PostOffice",
            Mobile = "Mobile",
            AllergicHistory = "AllergicHistory",
            HistoryOfPresentIllness = "HistoryOfPresentIllness",
            HoPastIllness = "HoPastIllness",
            DrugHistory = "DrugHistory",
            AntenatalList = "AntenatalList",
            NatalList = "NatalList",
            ImmunizationList = "ImmunizationList",
            PostNatalList = "PostNatalList",
            IllnessList = "IllnessList",
            PercussionList = "PercussionList",
            AuscultationList = "AuscultationList",
            BreathSoundList = "BreathSoundList",
            VocalResonanceList = "VocalResonanceList",
            FamilyHistoryId = "FamilyHistoryId",
            FamilyHistory = "FamilyHistory",
            PatientType = "PatientType",
            Immunization = "Immunization",
            FamilyHistoryDiseaseId = "FamilyHistoryDiseaseId",
            Weight = "Weight",
            Height = "Height",
            AnemiaId = "AnemiaId",
            Anaemia = "Anaemia",
            JaundiceId = "JaundiceId",
            Jaundice = "Jaundice",
            Cyanosis = "Cyanosis",
            CyanosisReSelect = "CyanosisReSelect",
            Stridor = "Stridor",
            OedemaId = "OedemaId",
            NicotineStain = "NicotineStain",
            Asterixis = "Asterixis",
            JVPReSelect = "JVPReSelect",
            LymphReSelect = "LymphReSelect",
            Oedema = "Oedema",
            DehydrationId = "DehydrationId",
            Clubbing = "Clubbing",
            ClubbingReSelect = "ClubbingReSelect",
            Koilonychia = "Koilonychia",
            Edema = "Edema",
            NeckVeins = "NeckVeins",
            JVP = "JVP",
            BonyTenderness = "BonyTenderness",
            Leukonychia = "Leukonychia",
            ThyroidGland = "ThyroidGland",
            Dehydration = "Dehydration",
            BMI = "BMI",
            BloodGroupId = "BloodGroupId",
            RegularMedicationId = "RegularMedicationId",
            BloodGroup = "BloodGroup",
            RegularMedicationName = "RegularMedicationName",
            Pulse = "Pulse",
            BP = "BP",
            RespRate = "RespRate",
            Temperature = "Temperature",
            Appearance = "Appearance",
            BodyBuild = "BodyBuild",
            CoOperation = "CoOperation",
            Circumference = "Circumference",
            Decubitus = "Decubitus",
            Behaviour = "Behaviour",
            SignMeningeal = "SignMeningeal",
            Nutrition = "Nutrition",
            GEOther = "GEOther",
            Inspection = "Inspection",
            Palpation = "Palpation",
            Percussion = "Percussion",
            Auscultation = "Auscultation",
            Other = "Other",
            Alimentary = "Alimentary",
            Milestone = "Milestone",
            Muscles = "Muscles",
            SocialPersonalHistory = "SocialPersonalHistory",
            Feedinghistory = "Feedinghistory",
            Travelhistory = "Travelhistory",
            ConsanguinityId = "ConsanguinityId",
            Consanguinity = "Consanguinity",
            Conditions = "Conditions",
            Respiratory = "Respiratory",
            Cardiovascular = "Cardiovascular",
            Genitourinary = "Genitourinary",
            Locomotor = "Locomotor",
            Haemopoetic = "Haemopoetic",
            Doctor = "Doctor",
            SalientFeatures = "SalientFeatures",
            ProvisionalDiagnosis = "ProvisionalDiagnosis",
            FinalDiagnosis = "FinalDiagnosis",
            Investigations = "Investigations",
            Plandischarge = "Plandischarge",
            Summary = "Summary",
            EmergencyPerson = "EmergencyPerson",
            EmergencyPerAddress = "EmergencyPerAddress",
            EmergencyPerMobile = "EmergencyPerMobile",
            MajorSurgeryId = "MajorSurgeryId",
            AddtoMajorSurgery = "AddtoMajorSurgery",
            MajorSurgery = "MajorSurgery",
            Socioeconomichistory = "Socioeconomichistory",
            AgeAtMenarche = "AgeAtMenarche",
            AgeAtMenarcheLabel = "AgeAtMenarcheLabel",
            AgeAtMenarcheLabel1 = "AgeAtMenarcheLabel1",
            AgeAtMenarcheLabel2 = "AgeAtMenarcheLabel2",
            AgeOfMenopause = "AgeOfMenopause",
            AgeOfLastChild = "AgeOfLastChild",
            RR = "RR",
            MenarcheCycle = "MenarcheCycle",
            IsNAD = "IsNAD",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DetailList = "DetailList",
            PPDetailList = "PPDetailList",
            DiagnosisDetails = "DiagnosisDetails",
            ScarMark = "ScarMark",
            Swelling = "Swelling",
            ShapeChest = "ShapeChest",
            VisibleVein = "VisibleVein",
            ApexBeat = "ApexBeat",
            SupraclavicularIndrawing = "SupraclavicularIndrawing",
            TrachealTag = "TrachealTag",
            ICTSitu = "ICTSitu",
            RadiationMark = "RadiationMark",
            PositionTrachea = "PositionTrachea",
            PositionApexBeat = "PositionApexBeat",
            VocalFremitus = "VocalFremitus",
            ChestExpansibility = "ChestExpansibility",
            PercussionNote = "PercussionNote",
            AddedSound = "AddedSound",
            Rhonchi = "Rhonchi",
            Crepitation = "Crepitation",
            Rub = "Rub",
            Skin = "Skin",
            SkinText = "SkinText",
            PulseRate = "PulseRate",
            Rhythm = "Rhythm",
            Volume = "Volume",
            Character = "Character",
            RedioFemoralDelay = "RedioFemoralDelay",
            ConditionOf = "ConditionOf",
            BloodPressure = "BloodPressure",
            NeckVenis = "NeckVenis",
            JVPReSelectCardiovascular = "JVPReSelectCardiovascular",
            Thyroid = "Thyroid",
            ScarMarkPrecordium = "ScarMarkPrecordium",
            SwellingPrecordium = "SwellingPrecordium",
            VisibleApexBeatPrecordium = "VisibleApexBeatPrecordium",
            VisibleImpulsePrecordium = "VisibleImpulsePrecordium"
        }
    }
}

