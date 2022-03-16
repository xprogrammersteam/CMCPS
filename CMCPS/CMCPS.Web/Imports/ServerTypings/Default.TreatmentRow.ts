namespace CMCPS.Default {
    export interface TreatmentRow {
        TreatmentId?: number;
        AdmissionId?: number;
        Treatment?: string;
        Doctor?: string;
        EntryDate?: string;
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
        MedicineId?: number;
        DoaseId?: number;
        DurationId?: number;
        AddtoArea?: string;
    }

    export namespace TreatmentRow {
        export const idProperty = 'TreatmentId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Treatment';

        export declare const enum Fields {
            TreatmentId = "TreatmentId",
            AdmissionId = "AdmissionId",
            Treatment = "Treatment",
            Doctor = "Doctor",
            EntryDate = "EntryDate",
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
            MedicineId = "MedicineId",
            DoaseId = "DoaseId",
            DurationId = "DurationId",
            AddtoArea = "AddtoArea"
        }
    }
}

