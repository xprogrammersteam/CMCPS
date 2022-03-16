namespace CMCPS.Default {
    export interface AnemiaAndJaundiceRow {
        AnemiaAndJaundiceId?: number;
        Name?: string;
    }

    export namespace AnemiaAndJaundiceRow {
        export const idProperty = 'AnemiaAndJaundiceId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.AnemiaAndJaundice';
        export const lookupKey = 'Default.AnemiaAndJaundice';

        export function getLookup(): Q.Lookup<AnemiaAndJaundiceRow> {
            return Q.getLookup<AnemiaAndJaundiceRow>('Default.AnemiaAndJaundice');
        }

        export declare const enum Fields {
            AnemiaAndJaundiceId = "AnemiaAndJaundiceId",
            Name = "Name"
        }
    }
}

