namespace CMCPS.Default {
    export interface SurgeonRow {
        SurgeonId?: number;
        SurgeonName?: string;
    }

    export namespace SurgeonRow {
        export const idProperty = 'SurgeonId';
        export const nameProperty = 'SurgeonName';
        export const localTextPrefix = 'Default.Surgeon';
        export const lookupKey = 'Default.Surgeon';

        export function getLookup(): Q.Lookup<SurgeonRow> {
            return Q.getLookup<SurgeonRow>('Default.Surgeon');
        }

        export declare const enum Fields {
            SurgeonId = "SurgeonId",
            SurgeonName = "SurgeonName"
        }
    }
}

