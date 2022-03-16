namespace CMCPS.Default {
    export interface DesignationRow {
        DesignationId?: number;
        DesignationName?: string;
    }

    export namespace DesignationRow {
        export const idProperty = 'DesignationId';
        export const nameProperty = 'DesignationName';
        export const localTextPrefix = 'Default.Designation';
        export const lookupKey = 'Default.Designation';

        export function getLookup(): Q.Lookup<DesignationRow> {
            return Q.getLookup<DesignationRow>('Default.Designation');
        }

        export declare const enum Fields {
            DesignationId = "DesignationId",
            DesignationName = "DesignationName"
        }
    }
}

