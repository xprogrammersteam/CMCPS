
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class SexGrid extends Serenity.EntityGrid<SexRow, any> {
        protected getColumnsKey() { return 'Default.Sex'; }
        protected getDialogType() { return SexDialog; }
        protected getIdProperty() { return SexRow.idProperty; }
        protected getLocalTextPrefix() { return SexRow.localTextPrefix; }
        protected getService() { return SexService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}