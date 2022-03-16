namespace CMCPS.Modules.Default.Admission {
    export enum ExaminationRegion {
        Abdomen = 1,
        Chest = 2,
        Limb = 3,
        HeadNeck = 4,
        Back = 5,
        Perineum = 6
    }
    Serenity.Decorators.registerEnumType(ExaminationRegion, 'CMCPS.Modules.Default.Admission.ExaminationRegion');
}

