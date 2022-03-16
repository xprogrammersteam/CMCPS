namespace CMCPS.Modules.Default.Admission {
    export enum CyanosisEnum {
        Absent = 1,
        central = 2,
        peripheral = 3
    }
    Serenity.Decorators.registerEnumType(CyanosisEnum, 'CMCPS.Modules.Default.Admission.CyanosisEnum');
}

