namespace CMCPS.Modules.Default.Admission {
    export enum FeedingHistory {
        Breastfed = 1,
        Artficialfeeding = 2
    }
    Serenity.Decorators.registerEnumType(FeedingHistory, 'CMCPS.Modules.Default.Admission.FeedingHistory');
}

