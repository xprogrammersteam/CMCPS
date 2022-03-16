namespace CMCPS.Default {
    export interface ComplicationRow {
        ComplicationId?: number;
        AdmissionId?: number;
        SexId?: number;
        UnitId?: number;
        EntryDate?: string;
        AdmissionDate?: string;
        Name?: string;
        Age?: string;
        Sex?: string;
        Weight?: string;
        BloodGroup?: string;
        OperationId?: number;
        OperationName?: string;
        PinNumber?: string;
        UnitNumber?: string;
        UnitRegNo?: string;
        BedNumber?: string;
        HospitalRegNo?: string;
        FinalDiagnosis?: string;
        ComplicationName?: string;
        ComplicationNoteId?: number;
        AddtoComplication?: string;
        Doctor?: string;
    }

    export namespace ComplicationRow {
        export const idProperty = 'ComplicationId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Complication';

        export declare const enum Fields {
            ComplicationId = "ComplicationId",
            AdmissionId = "AdmissionId",
            SexId = "SexId",
            UnitId = "UnitId",
            EntryDate = "EntryDate",
            AdmissionDate = "AdmissionDate",
            Name = "Name",
            Age = "Age",
            Sex = "Sex",
            Weight = "Weight",
            BloodGroup = "BloodGroup",
            OperationId = "OperationId",
            OperationName = "OperationName",
            PinNumber = "PinNumber",
            UnitNumber = "UnitNumber",
            UnitRegNo = "UnitRegNo",
            BedNumber = "BedNumber",
            HospitalRegNo = "HospitalRegNo",
            FinalDiagnosis = "FinalDiagnosis",
            ComplicationName = "ComplicationName",
            ComplicationNoteId = "ComplicationNoteId",
            AddtoComplication = "AddtoComplication",
            Doctor = "Doctor"
        }
    }
}

