namespace CMCPS.Default {
    export interface BreathSoundRow {
        BreathSoundId?: number;
        BreathSoundName?: string;
    }

    export namespace BreathSoundRow {
        export const idProperty = 'BreathSoundId';
        export const nameProperty = 'BreathSoundName';
        export const localTextPrefix = 'Default.BreathSound';
        export const lookupKey = 'Default.BreathSound';

        export function getLookup(): Q.Lookup<BreathSoundRow> {
            return Q.getLookup<BreathSoundRow>('Default.BreathSound');
        }

        export declare const enum Fields {
            BreathSoundId = "BreathSoundId",
            BreathSoundName = "BreathSoundName"
        }
    }
}

