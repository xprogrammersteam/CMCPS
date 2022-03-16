namespace CMCPS.Default {
    export interface PositionRow {
        PositionId?: number;
        PositionName?: string;
    }

    export namespace PositionRow {
        export const idProperty = 'PositionId';
        export const nameProperty = 'PositionName';
        export const localTextPrefix = 'Default.Position';
        export const lookupKey = 'Default.Position';

        export function getLookup(): Q.Lookup<PositionRow> {
            return Q.getLookup<PositionRow>('Default.Position');
        }

        export declare const enum Fields {
            PositionId = "PositionId",
            PositionName = "PositionName"
        }
    }
}

