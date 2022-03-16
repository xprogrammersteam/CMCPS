namespace CMCPS.Default {
    export interface InstructionsRow {
        InstructionsId?: number;
        InstructionsName?: string;
    }

    export namespace InstructionsRow {
        export const idProperty = 'InstructionsId';
        export const nameProperty = 'InstructionsName';
        export const localTextPrefix = 'Default.Instructions';
        export const lookupKey = 'Default.Instructions';

        export function getLookup(): Q.Lookup<InstructionsRow> {
            return Q.getLookup<InstructionsRow>('Default.Instructions');
        }

        export declare const enum Fields {
            InstructionsId = "InstructionsId",
            InstructionsName = "InstructionsName"
        }
    }
}

