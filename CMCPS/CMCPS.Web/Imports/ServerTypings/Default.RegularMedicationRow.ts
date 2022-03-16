namespace CMCPS.Default {
    export interface RegularMedicationRow {
        RegularMedicationId?: number;
        RegularMedicationName?: string;
    }

    export namespace RegularMedicationRow {
        export const idProperty = 'RegularMedicationId';
        export const nameProperty = 'RegularMedicationName';
        export const localTextPrefix = 'Default.RegularMedication';
        export const lookupKey = 'Default.RegularMedication';

        export function getLookup(): Q.Lookup<RegularMedicationRow> {
            return Q.getLookup<RegularMedicationRow>('Default.RegularMedication');
        }

        export declare const enum Fields {
            RegularMedicationId = "RegularMedicationId",
            RegularMedicationName = "RegularMedicationName"
        }
    }
}

