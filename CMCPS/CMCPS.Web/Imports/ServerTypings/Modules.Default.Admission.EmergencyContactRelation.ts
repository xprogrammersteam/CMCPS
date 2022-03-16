namespace CMCPS.Modules.Default.Admission {
    export enum EmergencyContactRelation {
        Married = 1,
        Unmarried = 2,
        Brother = 3,
        Sister = 4,
        Others = 5
    }
    Serenity.Decorators.registerEnumType(EmergencyContactRelation, 'CMCPS.Modules.Default.Admission.EmergencyContactRelation');
}

