namespace CMCPS.Default {
    export interface FurtherPlanRow {
        FurtherPlanId?: number;
        FurtherPlanName?: string;
    }

    export namespace FurtherPlanRow {
        export const idProperty = 'FurtherPlanId';
        export const nameProperty = 'FurtherPlanName';
        export const localTextPrefix = 'Default.FurtherPlan';
        export const lookupKey = 'Default.FurtherPlan';

        export function getLookup(): Q.Lookup<FurtherPlanRow> {
            return Q.getLookup<FurtherPlanRow>('Default.FurtherPlan');
        }

        export declare const enum Fields {
            FurtherPlanId = "FurtherPlanId",
            FurtherPlanName = "FurtherPlanName"
        }
    }
}

