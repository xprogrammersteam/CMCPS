namespace CMCPS.Modules.Default.Admission {
    export enum VolumeEnum {
        Normal = 1,
        High = 2,
        Low = 3
    }
    Serenity.Decorators.registerEnumType(VolumeEnum, 'CMCPS.Modules.Default.Admission.VolumeEnum');
}

