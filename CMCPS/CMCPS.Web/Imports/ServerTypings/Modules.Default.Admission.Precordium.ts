namespace CMCPS.Modules.Default.Admission {
    export enum Precordium {
        No = 1,
        ApexBeat = 2,
        parasternal = 3,
        RootNeck = 4,
        Epigastric = 5
    }
    Serenity.Decorators.registerEnumType(Precordium, 'CMCPS.Modules.Default.Admission.Precordium');
}

