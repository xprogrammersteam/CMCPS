namespace CMCPS.Default {
    export interface IllNessRow {
        IllnessId?: number;
        IllnessName?: string;
    }

    export namespace IllNessRow {
        export const idProperty = 'IllnessId';
        export const nameProperty = 'IllnessName';
        export const localTextPrefix = 'Default.IllNess';
        export const lookupKey = 'Default.IllNess';

        export function getLookup(): Q.Lookup<IllNessRow> {
            return Q.getLookup<IllNessRow>('Default.IllNess');
        }

        export declare const enum Fields {
            IllnessId = "IllnessId",
            IllnessName = "IllnessName"
        }
    }
}

