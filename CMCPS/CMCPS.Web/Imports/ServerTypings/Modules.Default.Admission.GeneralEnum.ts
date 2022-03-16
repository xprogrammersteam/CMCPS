namespace CMCPS.Modules.Default.Admission {
    export enum GeneralEnum {
        Absent = 1,
        Mild = 2,
        Moderate = 3,
        Severe = 4
    }
    Serenity.Decorators.registerEnumType(GeneralEnum, 'CMCPS.Modules.Default.Admission.GeneralEnum');
}

