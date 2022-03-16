namespace CMCPS.Default {
    export interface ImagesRow {
        ImageId?: number;
        AdmissionId?: number;
        Image?: string;
        EntryDate?: string;
        AdmissionDate?: string;
        PatientName?: string;
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
    }

    export namespace ImagesRow {
        export const idProperty = 'ImageId';
        export const nameProperty = 'PatientName';
        export const localTextPrefix = 'Default.Images';

        export declare const enum Fields {
            ImageId = "ImageId",
            AdmissionId = "AdmissionId",
            Image = "Image",
            EntryDate = "EntryDate",
            AdmissionDate = "AdmissionDate",
            PatientName = "PatientName",
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
            HospitalRegNo = "HospitalRegNo"
        }
    }
}

