
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class VocalResonanceHistoryGrid extends Serenity.EntityGrid<VocalResonanceHistoryRow, any> {
        protected getColumnsKey() { return 'Default.VocalResonanceHistory'; }
        protected getDialogType() { return VocalResonanceHistoryDialog; }
        protected getIdProperty() { return VocalResonanceHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return VocalResonanceHistoryRow.localTextPrefix; }
        protected getService() { return VocalResonanceHistoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}