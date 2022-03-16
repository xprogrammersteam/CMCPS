
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class AnesthesiaGrid extends Serenity.EntityGrid<AnesthesiaRow, any> {
        protected getColumnsKey() { return 'Default.Anesthesia'; }
        protected getDialogType() { return AnesthesiaDialog; }
        protected getIdProperty() { return AnesthesiaRow.idProperty; }
        protected getLocalTextPrefix() { return AnesthesiaRow.localTextPrefix; }
        protected getService() { return AnesthesiaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}