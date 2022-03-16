namespace CMCPS.Default {
    export interface OutcomeRow {
        OutcomeId?: number;
        AdmissionId?: number;
        EntryDate?: string;
        AdmissionDate?: string;
        Name?: string;
        Age?: string;
        UnitId?: number;
        SexId?: number;
        Sex?: string;
        Weight?: number;
        BloodGroup?: string;
        PinNumber?: string;
        UnitNumber?: string;
        UnitRegNo?: string;
        BedNumber?: string;
        HospitalRegNo?: string;
        OutcomeNoteId?: number;
        AddtoOutCome?: string;
        OutcomeName?: string;
        Doctor?: string;
        FinalDiagnosis?: string;
    }

    export namespace OutcomeRow {
        export const idProperty = 'OutcomeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Outcome';

        export declare const enum Fields {
            OutcomeId = "OutcomeId",
            AdmissionId = "AdmissionId",
            EntryDate = "EntryDate",
            AdmissionDate = "AdmissionDate",
            Name = "Name",
            Age = "Age",
            UnitId = "UnitId",
            SexId = "SexId",
            Sex = "Sex",
            Weight = "Weight",
            BloodGroup = "BloodGroup",
            PinNumber = "PinNumber",
            UnitNumber = "UnitNumber",
            UnitRegNo = "UnitRegNo",
            BedNumber = "BedNumber",
            HospitalRegNo = "HospitalRegNo",
            OutcomeNoteId = "OutcomeNoteId",
            AddtoOutCome = "AddtoOutCome",
            OutcomeName = "OutcomeName",
            Doctor = "Doctor",
            FinalDiagnosis = "FinalDiagnosis"
        }
    }
}

