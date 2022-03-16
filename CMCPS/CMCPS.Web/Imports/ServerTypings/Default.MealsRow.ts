namespace CMCPS.Default {
    export interface MealsRow {
        MealId?: number;
        MealName?: string;
    }

    export namespace MealsRow {
        export const idProperty = 'MealId';
        export const nameProperty = 'MealName';
        export const localTextPrefix = 'Default.Meals';
        export const lookupKey = 'Default.Meals';

        export function getLookup(): Q.Lookup<MealsRow> {
            return Q.getLookup<MealsRow>('Default.Meals');
        }

        export declare const enum Fields {
            MealId = "MealId",
            MealName = "MealName"
        }
    }
}

