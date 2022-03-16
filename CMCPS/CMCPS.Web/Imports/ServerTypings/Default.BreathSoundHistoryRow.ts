namespace CMCPS.Default {
    export interface BreathSoundHistoryRow {
        BreathSoundHistoryId?: number;
        AdmissionId?: number;
        BreathSoundId?: number;
    }

    export namespace BreathSoundHistoryRow {
        export const idProperty = 'BreathSoundHistoryId';
        export const localTextPrefix = 'Default.BreathSoundHistory';
        export const lookupKey = 'Default.BreathSoundHistory';

        export function getLookup(): Q.Lookup<BreathSoundHistoryRow> {
            return Q.getLookup<BreathSoundHistoryRow>('Default.BreathSoundHistory');
        }

        export declare const enum Fields {
            BreathSoundHistoryId = "BreathSoundHistoryId",
            AdmissionId = "AdmissionId",
            BreathSoundId = "BreathSoundId"
        }
    }
}

