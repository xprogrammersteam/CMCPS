
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class FamilyHistoryGrid extends Serenity.EntityGrid<FamilyHistoryRow, any> {
        protected getColumnsKey() { return 'Default.FamilyHistory'; }
        protected getDialogType() { return FamilyHistoryDialog; }
        protected getIdProperty() { return FamilyHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return FamilyHistoryRow.localTextPrefix; }
        protected getService() { return FamilyHistoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}