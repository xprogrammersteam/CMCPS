namespace CMCPS.Default {
    export interface AnesthesiaRow {
        AnesthesiaId?: number;
        AnesthesiaName?: string;
    }

    export namespace AnesthesiaRow {
        export const idProperty = 'AnesthesiaId';
        export const nameProperty = 'AnesthesiaName';
        export const localTextPrefix = 'Default.Anesthesia';
        export const lookupKey = 'Default.Anesthesia';

        export function getLookup(): Q.Lookup<AnesthesiaRow> {
            return Q.getLookup<AnesthesiaRow>('Default.Anesthesia');
        }

        export declare const enum Fields {
            AnesthesiaId = "AnesthesiaId",
            AnesthesiaName = "AnesthesiaName"
        }
    }
}

