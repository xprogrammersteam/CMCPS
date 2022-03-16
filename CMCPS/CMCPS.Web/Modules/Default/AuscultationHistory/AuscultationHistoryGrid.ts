
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class AuscultationHistoryGrid extends Serenity.EntityGrid<AuscultationHistoryRow, any> {
        protected getColumnsKey() { return 'Default.AuscultationHistory'; }
        protected getDialogType() { return AuscultationHistoryDialog; }
        protected getIdProperty() { return AuscultationHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return AuscultationHistoryRow.localTextPrefix; }
        protected getService() { return AuscultationHistoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}