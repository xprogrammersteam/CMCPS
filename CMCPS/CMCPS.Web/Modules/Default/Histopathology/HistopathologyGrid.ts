
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class HistopathologyGrid extends Serenity.EntityGrid<HistopathologyRow, any> {
        protected getColumnsKey() { return 'Default.Histopathology'; }
        protected getDialogType() { return HistopathologyDialog; }
        protected getIdProperty() { return HistopathologyRow.idProperty; }
        protected getLocalTextPrefix() { return HistopathologyRow.localTextPrefix; }
        protected getService() { return HistopathologyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}