namespace CMCPS.Default {
    export interface AdmissionCcDetailsRow {
        ComplaintId?: number;
        AdmissionId?: number;
        PrComplaintsId?: number;
        Days?: string;
        PComplaints?: string;
    }

    export namespace AdmissionCcDetailsRow {
        export const idProperty = 'ComplaintId';
        export const nameProperty = 'Days';
        export const localTextPrefix = 'Default.AdmissionCcDetails';

        export declare const enum Fields {
            ComplaintId = "ComplaintId",
            AdmissionId = "AdmissionId",
            PrComplaintsId = "PrComplaintsId",
            Days = "Days",
            PComplaints = "PComplaints"
        }
    }
}

