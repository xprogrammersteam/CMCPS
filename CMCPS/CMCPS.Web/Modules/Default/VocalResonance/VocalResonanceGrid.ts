
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class VocalResonanceGrid extends Serenity.EntityGrid<VocalResonanceRow, any> {
        protected getColumnsKey() { return 'Default.VocalResonance'; }
        protected getDialogType() { return VocalResonanceDialog; }
        protected getIdProperty() { return VocalResonanceRow.idProperty; }
        protected getLocalTextPrefix() { return VocalResonanceRow.localTextPrefix; }
        protected getService() { return VocalResonanceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}