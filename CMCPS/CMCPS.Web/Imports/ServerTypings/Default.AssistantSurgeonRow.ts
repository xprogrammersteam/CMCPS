namespace CMCPS.Default {
    export interface AssistantSurgeonRow {
        AssistantSurgeonId?: number;
        AssistantSurgeonName?: string;
    }

    export namespace AssistantSurgeonRow {
        export const idProperty = 'AssistantSurgeonId';
        export const nameProperty = 'AssistantSurgeonName';
        export const localTextPrefix = 'Default.AssistantSurgeon';
        export const lookupKey = 'Default.AssistantSurgeon';

        export function getLookup(): Q.Lookup<AssistantSurgeonRow> {
            return Q.getLookup<AssistantSurgeonRow>('Default.AssistantSurgeon');
        }

        export declare const enum Fields {
            AssistantSurgeonId = "AssistantSurgeonId",
            AssistantSurgeonName = "AssistantSurgeonName"
        }
    }
}

