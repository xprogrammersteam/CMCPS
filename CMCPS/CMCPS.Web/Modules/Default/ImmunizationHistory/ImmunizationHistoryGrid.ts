
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class ImmunizationHistoryGrid extends Serenity.EntityGrid<ImmunizationHistoryRow, any> {
        protected getColumnsKey() { return 'Default.ImmunizationHistory'; }
        protected getDialogType() { return ImmunizationHistoryDialog; }
        protected getIdProperty() { return ImmunizationHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return ImmunizationHistoryRow.localTextPrefix; }
        protected getService() { return ImmunizationHistoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}