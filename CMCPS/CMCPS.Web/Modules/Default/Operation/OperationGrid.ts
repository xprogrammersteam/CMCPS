
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class OperationGrid extends Serenity.EntityGrid<OperationRow, any> {
        protected getColumnsKey() { return 'Default.Operation'; }
        protected getDialogType() { return OperationDialog; }
        protected getIdProperty() { return OperationRow.idProperty; }
        protected getLocalTextPrefix() { return OperationRow.localTextPrefix; }
        protected getService() { return OperationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}