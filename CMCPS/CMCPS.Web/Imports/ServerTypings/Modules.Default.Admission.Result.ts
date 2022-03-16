namespace CMCPS.Modules.Default.Admission {
    export enum Result {
        Cured = 1,
        Improved = 2,
        Expired = 3,
        DORB = 4
    }
    Serenity.Decorators.registerEnumType(Result, 'CMCPS.Modules.Default.Admission.Result');
}

