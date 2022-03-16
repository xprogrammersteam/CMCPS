namespace CMCPS.Default {
    export interface OtherLabRow {
        LabId?: number;
        Name?: string;
    }

    export namespace OtherLabRow {
        export const idProperty = 'LabId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.OtherLab';
        export const lookupKey = 'Default.OtherLab';

        export function getLookup(): Q.Lookup<OtherLabRow> {
            return Q.getLookup<OtherLabRow>('Default.OtherLab');
        }

        export declare const enum Fields {
            LabId = "LabId",
            Name = "Name"
        }
    }
}

