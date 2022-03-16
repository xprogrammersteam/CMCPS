namespace CMCPS.Default {
    export interface AuscultationRow {
        AuscultationId?: number;
        AuscultationName?: string;
    }

    export namespace AuscultationRow {
        export const idProperty = 'AuscultationId';
        export const nameProperty = 'AuscultationName';
        export const localTextPrefix = 'Default.Auscultation';
        export const lookupKey = 'Default.Auscultation';

        export function getLookup(): Q.Lookup<AuscultationRow> {
            return Q.getLookup<AuscultationRow>('Default.Auscultation');
        }

        export declare const enum Fields {
            AuscultationId = "AuscultationId",
            AuscultationName = "AuscultationName"
        }
    }
}

