namespace CMCPS.Default {
    export interface MedicineRow {
        MedicineId?: number;
        MedicineName?: string;
    }

    export namespace MedicineRow {
        export const idProperty = 'MedicineId';
        export const nameProperty = 'MedicineName';
        export const localTextPrefix = 'Default.Medicine';
        export const lookupKey = 'Default.Medicine';

        export function getLookup(): Q.Lookup<MedicineRow> {
            return Q.getLookup<MedicineRow>('Default.Medicine');
        }

        export declare const enum Fields {
            MedicineId = "MedicineId",
            MedicineName = "MedicineName"
        }
    }
}

