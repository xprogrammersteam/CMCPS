namespace CMCPS.Default {
    export interface DurationRow {
        Id?: number;
        DurationName?: string;
    }

    export namespace DurationRow {
        export const idProperty = 'Id';
        export const nameProperty = 'DurationName';
        export const localTextPrefix = 'Default.Duration';
        export const lookupKey = 'Default.Duration';

        export function getLookup(): Q.Lookup<DurationRow> {
            return Q.getLookup<DurationRow>('Default.Duration');
        }

        export declare const enum Fields {
            Id = "Id",
            DurationName = "DurationName"
        }
    }
}

