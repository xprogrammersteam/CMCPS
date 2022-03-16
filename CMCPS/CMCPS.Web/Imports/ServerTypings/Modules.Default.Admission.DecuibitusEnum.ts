namespace CMCPS.Modules.Default.Admission {
    export enum DecuibitusEnum {
        Onchoice = 1,
        Supine = 2,
        Proppedup = 3,
        ill = 4
    }
    Serenity.Decorators.registerEnumType(DecuibitusEnum, 'CMCPS.Modules.Default.Admission.DecuibitusEnum');
}

