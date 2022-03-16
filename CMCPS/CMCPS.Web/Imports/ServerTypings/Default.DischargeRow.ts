namespace CMCPS.Default {
    export interface DischargeRow {
        DischargeId?: number;
        AdmissionId?: number;
        Date?: string;
        AdmissionDate?: string;
        Name?: string;
        Age?: string;
        SexId?: number;
        UnitId?: number;
        Sex?: string;
        Weight?: number;
        BloodGroup?: string;
        PinNumber?: string;
        UnitNumber?: string;
        UnitRegNo?: string;
        BedNumber?: string;
        HospitalRegNo?: string;
        Cbc?: string;
        Creatinine?: string;
        Urea?: string;
        Sugar?: string;
        Albumin?: string;
        Calcium?: string;
        BloodCulture?: string;
        Crp?: string;
        Bt?: string;
        Ct?: string;
        ProthrombinTime?: string;
        Aptt?: string;
        OptionToAddHematology?: string;
        Na?: string;
        K?: string;
        Cl?: string;
        HCO3?: string;
        Cxr?: string;
        Axr?: string;
        XrayKub?: string;
        Usg?: string;
        BaEnema?: string;
        BaMealFollowThrough?: string;
        Mcu?: string;
        Rgu?: string;
        Ivu?: string;
        CtScan?: string;
        Mri?: string;
        OptionToAddImaging?: string;
        OperationDate?: string;
        OperationId?: number;
        OperationName?: string;
        Findings?: string;
        Procedures?: string;
        Diagnosis?: string;
        Indication?: string;
        Anesthesia?: string;
        Position?: string;
        Incision?: string;
        Diagram?: string;
        Histopathology?: string;
        SpecialNote?: string;
        Instructions?: string;
        FurtherPlan?: string;
        TreatmentContinues?: string;
        MedicineId?: number;
        DoaseId?: number;
        DurationId?: number;
        AddtoArea?: string;
        Meal?: number;
        Advice?: string;
    }

    export namespace DischargeRow {
        export const idProperty = 'DischargeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Discharge';
        export const lookupKey = 'Default.Discharge';

        export function getLookup(): Q.Lookup<DischargeRow> {
            return Q.getLookup<DischargeRow>('Default.Discharge');
        }

        export declare const enum Fields {
            DischargeId = "DischargeId",
            AdmissionId = "AdmissionId",
            Date = "Date",
            AdmissionDate = "AdmissionDate",
            Name = "Name",
            Age = "Age",
            SexId = "SexId",
            UnitId = "UnitId",
            Sex = "Sex",
            Weight = "Weight",
            BloodGroup = "BloodGroup",
            PinNumber = "PinNumber",
            UnitNumber = "UnitNumber",
            UnitRegNo = "UnitRegNo",
            BedNumber = "BedNumber",
            HospitalRegNo = "HospitalRegNo",
            Cbc = "Cbc",
            Creatinine = "Creatinine",
            Urea = "Urea",
            Sugar = "Sugar",
            Albumin = "Albumin",
            Calcium = "Calcium",
            BloodCulture = "BloodCulture",
            Crp = "Crp",
            Bt = "Bt",
            Ct = "Ct",
            ProthrombinTime = "ProthrombinTime",
            Aptt = "Aptt",
            OptionToAddHematology = "OptionToAddHematology",
            Na = "Na",
            K = "K",
            Cl = "Cl",
            HCO3 = "HCO3",
            Cxr = "Cxr",
            Axr = "Axr",
            XrayKub = "XrayKub",
            Usg = "Usg",
            BaEnema = "BaEnema",
            BaMealFollowThrough = "BaMealFollowThrough",
            Mcu = "Mcu",
            Rgu = "Rgu",
            Ivu = "Ivu",
            CtScan = "CtScan",
            Mri = "Mri",
            OptionToAddImaging = "OptionToAddImaging",
            OperationDate = "OperationDate",
            OperationId = "OperationId",
            OperationName = "OperationName",
            Findings = "Findings",
            Procedures = "Procedures",
            Diagnosis = "Diagnosis",
            Indication = "Indication",
            Anesthesia = "Anesthesia",
            Position = "Position",
            Incision = "Incision",
            Diagram = "Diagram",
            Histopathology = "Histopathology",
            SpecialNote = "SpecialNote",
            Instructions = "Instructions",
            FurtherPlan = "FurtherPlan",
            TreatmentContinues = "TreatmentContinues",
            MedicineId = "MedicineId",
            DoaseId = "DoaseId",
            DurationId = "DurationId",
            AddtoArea = "AddtoArea",
            Meal = "Meal",
            Advice = "Advice"
        }
    }
}

