namespace CMCPS.Default {
    export interface InvestigationRow {
        OtherLab?: OtherLabWithInvestigationRow[];
        Pathology?: PathologyAndInvestigationDetailsRow[];
        InvestigationId?: number;
        AdmissionId?: number;
        EntryDate?: string;
        AdmissionDate?: string;
        Name?: string;
        Age?: string;
        Sex?: string;
        SexId?: number;
        UnitId?: number;
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
        Cxr?: string;
        Na?: string;
        K?: string;
        Cl?: string;
        HCO3?: string;
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
    }

    export namespace InvestigationRow {
        export const idProperty = 'InvestigationId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Investigation';
        export const lookupKey = 'Default.Investigation';

        export function getLookup(): Q.Lookup<InvestigationRow> {
            return Q.getLookup<InvestigationRow>('Default.Investigation');
        }

        export declare const enum Fields {
            OtherLab = "OtherLab",
            Pathology = "Pathology",
            InvestigationId = "InvestigationId",
            AdmissionId = "AdmissionId",
            EntryDate = "EntryDate",
            AdmissionDate = "AdmissionDate",
            Name = "Name",
            Age = "Age",
            Sex = "Sex",
            SexId = "SexId",
            UnitId = "UnitId",
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
            Cxr = "Cxr",
            Na = "Na",
            K = "K",
            Cl = "Cl",
            HCO3 = "HCO3",
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
            OptionToAddImaging = "OptionToAddImaging"
        }
    }
}

