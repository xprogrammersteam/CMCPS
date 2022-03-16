namespace CMCPS.Default {
    export interface OperationRow {
        OperationId?: number;
        OperationName?: string;
        Findings?: string;
        Procedures?: string;
    }

    export namespace OperationRow {
        export const idProperty = 'OperationId';
        export const nameProperty = 'OperationName';
        export const localTextPrefix = 'Default.Operation';
        export const lookupKey = 'Default.Operation';

        export function getLookup(): Q.Lookup<OperationRow> {
            return Q.getLookup<OperationRow>('Default.Operation');
        }

        export declare const enum Fields {
            OperationId = "OperationId",
            OperationName = "OperationName",
            Findings = "Findings",
            Procedures = "Procedures"
        }
    }
}

