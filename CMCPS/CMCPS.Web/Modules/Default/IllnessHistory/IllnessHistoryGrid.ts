
namespace CMC.Default {

    @Serenity.Decorators.registerClass()
    export class IllnessHistoryGrid extends Serenity.EntityGrid<IllnessHistoryRow, any> {
        protected getColumnsKey() { return 'Default.IllnessHistory'; }
        protected getDialogType() { return IllnessHistoryDialog; }
        protected getIdProperty() { return IllnessHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return IllnessHistoryRow.localTextPrefix; }
        protected getService() { return IllnessHistoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}