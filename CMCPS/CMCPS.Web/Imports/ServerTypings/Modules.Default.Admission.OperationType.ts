namespace CMCPS.Modules.Default.Admission {
    export enum OperationType {
        Routine = 1,
        Emergency = 2
    }
    Serenity.Decorators.registerEnumType(OperationType, 'CMCPS.Modules.Default.Admission.OperationType');
}

