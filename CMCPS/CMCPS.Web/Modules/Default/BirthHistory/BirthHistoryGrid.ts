
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class BirthHistoryGrid extends Serenity.EntityGrid<BirthHistoryRow, any> {
        protected getColumnsKey() { return 'Default.BirthHistory'; }
        protected getDialogType() { return BirthHistoryDialog; }
        protected getIdProperty() { return BirthHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return BirthHistoryRow.localTextPrefix; }
        protected getService() { return BirthHistoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}