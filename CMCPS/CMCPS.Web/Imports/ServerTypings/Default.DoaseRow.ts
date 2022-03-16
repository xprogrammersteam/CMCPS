namespace CMCPS.Default {
    export interface DoaseRow {
        Id?: number;
        DoaseName?: string;
    }

    export namespace DoaseRow {
        export const idProperty = 'Id';
        export const nameProperty = 'DoaseName';
        export const localTextPrefix = 'Default.Doase';
        export const lookupKey = 'Default.Doase';

        export function getLookup(): Q.Lookup<DoaseRow> {
            return Q.getLookup<DoaseRow>('Default.Doase');
        }

        export declare const enum Fields {
            Id = "Id",
            DoaseName = "DoaseName"
        }
    }
}

