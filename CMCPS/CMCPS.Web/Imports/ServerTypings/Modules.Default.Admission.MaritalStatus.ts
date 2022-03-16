namespace CMCPS.Modules.Default.Admission {
    export enum MaritalStatus {
        Married = 1,
        Unmarried = 2,
        Others = 3
    }
    Serenity.Decorators.registerEnumType(MaritalStatus, 'CMCPS.Modules.Default.Admission.MaritalStatus');
}

