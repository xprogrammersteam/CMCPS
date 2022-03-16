namespace CMCPS.Modules.Default.Admission {
    export enum Immunization {
        Immunized = 1,
        NotImmunized = 2
    }
    Serenity.Decorators.registerEnumType(Immunization, 'CMCPS.Modules.Default.Admission.Immunization');
}

