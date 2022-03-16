namespace CMCPS.Modules.Default.Admission {
    export enum CharacterEnum {
        Normal = 1,
        Slow = 2,
        Collapsing = 3,
        bigeminal = 4,
        Bisferiens = 5,
        Pulsus = 6,
        PulsusAlt = 7
    }
    Serenity.Decorators.registerEnumType(CharacterEnum, 'CMCPS.Modules.Default.Admission.CharacterEnum');
}

