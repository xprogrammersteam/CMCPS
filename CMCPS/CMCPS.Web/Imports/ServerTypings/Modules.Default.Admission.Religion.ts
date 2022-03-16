namespace CMCPS.Modules.Default.Admission {
    export enum Religion {
        Islam = 1,
        Hinduism = 2,
        Buddhists = 3,
        Christians = 4,
        Animists = 5
    }
    Serenity.Decorators.registerEnumType(Religion, 'CMCPS.Modules.Default.Admission.Religion', 'Default.CommonFixedValue');
}

