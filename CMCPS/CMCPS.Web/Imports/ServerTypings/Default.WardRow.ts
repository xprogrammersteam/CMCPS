namespace CMCPS.Default {
    export interface WardRow {
        Id?: number;
        WardNo?: string;
    }

    export namespace WardRow {
        export const idProperty = 'Id';
        export const nameProperty = 'WardNo';
        export const localTextPrefix = 'Default.Ward';
        export const lookupKey = 'Default.Ward';

        export function getLookup(): Q.Lookup<WardRow> {
            return Q.getLookup<WardRow>('Default.Ward');
        }

        export declare const enum Fields {
            Id = "Id",
            WardNo = "WardNo"
        }
    }
}

