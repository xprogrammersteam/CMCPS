namespace CMCPS.Default {
    export interface PresentingComplaintsRow {
        PComplaintsId?: number;
        PComplaints?: string;
        Note?: string;
    }

    export namespace PresentingComplaintsRow {
        export const idProperty = 'PComplaintsId';
        export const nameProperty = 'PComplaints';
        export const localTextPrefix = 'Default.PresentingComplaints';
        export const lookupKey = 'Default.PresentingComplaints';

        export function getLookup(): Q.Lookup<PresentingComplaintsRow> {
            return Q.getLookup<PresentingComplaintsRow>('Default.PresentingComplaints');
        }

        export declare const enum Fields {
            PComplaintsId = "PComplaintsId",
            PComplaints = "PComplaints",
            Note = "Note"
        }
    }
}

