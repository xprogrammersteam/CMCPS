namespace CMCPS.Default {
    export interface AnesthetistRow {
        AnesthetistId?: number;
        AnesthetistName?: string;
    }

    export namespace AnesthetistRow {
        export const idProperty = 'AnesthetistId';
        export const nameProperty = 'AnesthetistName';
        export const localTextPrefix = 'Default.Anesthetist';
        export const lookupKey = 'Default.Anesthetist';

        export function getLookup(): Q.Lookup<AnesthetistRow> {
            return Q.getLookup<AnesthetistRow>('Default.Anesthetist');
        }

        export declare const enum Fields {
            AnesthetistId = "AnesthetistId",
            AnesthetistName = "AnesthetistName"
        }
    }
}

