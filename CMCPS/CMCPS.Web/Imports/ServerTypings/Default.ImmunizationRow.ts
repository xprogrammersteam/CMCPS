namespace CMCPS.Default {
    export interface ImmunizationRow {
        ImmunizationId?: number;
        ImmunizationName?: string;
    }

    export namespace ImmunizationRow {
        export const idProperty = 'ImmunizationId';
        export const nameProperty = 'ImmunizationName';
        export const localTextPrefix = 'Default.Immunization';
        export const lookupKey = 'Default.Immunization';

        export function getLookup(): Q.Lookup<ImmunizationRow> {
            return Q.getLookup<ImmunizationRow>('Default.Immunization');
        }

        export declare const enum Fields {
            ImmunizationId = "ImmunizationId",
            ImmunizationName = "ImmunizationName"
        }
    }
}

