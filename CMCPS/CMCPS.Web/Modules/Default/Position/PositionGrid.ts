
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class PositionGrid extends Serenity.EntityGrid<PositionRow, any> {
        protected getColumnsKey() { return 'Default.Position'; }
        protected getDialogType() { return PositionDialog; }
        protected getIdProperty() { return PositionRow.idProperty; }
        protected getLocalTextPrefix() { return PositionRow.localTextPrefix; }
        protected getService() { return PositionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}