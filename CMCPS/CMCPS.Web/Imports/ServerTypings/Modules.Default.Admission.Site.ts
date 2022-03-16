namespace CMCPS.Modules.Default.Admission {
    export enum Site {
        Cervical = 1,
        Axillary = 2,
        Inguinal = 3,
        Other = 4
    }
    Serenity.Decorators.registerEnumType(Site, 'CMCPS.Modules.Default.Admission.Site');
}

