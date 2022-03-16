namespace CMCPS.Modules.Default.Admission {
    export enum ConsistencyEnum {
        Soft = 1,
        Firm = 2,
        Hard = 2
    }
    Serenity.Decorators.registerEnumType(ConsistencyEnum, 'CMCPS.Modules.Default.Admission.ConsistencyEnum');
}

