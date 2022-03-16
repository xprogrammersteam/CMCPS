namespace CMCPS.Default {
    export interface NoteRow {
        NoteId?: number;
        AdmissionId?: number;
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
        FinalDiagnosis?: string;
        PNoteId?: number;
        AddtoNote?: string;
        Note?: string;
        Doctor?: string;
    }

    export namespace NoteRow {
        export const idProperty = 'NoteId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Note';

        export declare const enum Fields {
            NoteId = "NoteId",
            AdmissionId = "AdmissionId",
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
            FinalDiagnosis = "FinalDiagnosis",
            PNoteId = "PNoteId",
            AddtoNote = "AddtoNote",
            Note = "Note",
            Doctor = "Doctor"
        }
    }
}

