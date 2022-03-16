
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class WardGrid extends Serenity.EntityGrid<WardRow, any> {
        protected getColumnsKey() { return 'Default.Ward'; }
        protected getDialogType() { return WardDialog; }
        protected getIdProperty() { return WardRow.idProperty; }
        protected getLocalTextPrefix() { return WardRow.localTextPrefix; }
        protected getService() { return WardService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}