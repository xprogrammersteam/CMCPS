
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class NatalGrid extends Serenity.EntityGrid<NatalRow, any> {
        protected getColumnsKey() { return 'Default.Natal'; }
        protected getDialogType() { return NatalDialog; }
        protected getIdProperty() { return NatalRow.idProperty; }
        protected getLocalTextPrefix() { return NatalRow.localTextPrefix; }
        protected getService() { return NatalService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}