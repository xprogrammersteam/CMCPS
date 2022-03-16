
namespace CMCPC.Default {

    @Serenity.Decorators.registerClass()
    export class PercussionHistoryGrid extends Serenity.EntityGrid<PercussionHistoryRow, any> {
        protected getColumnsKey() { return 'Default.PercussionHistory'; }
        protected getDialogType() { return PercussionHistoryDialog; }
        protected getIdProperty() { return PercussionHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return PercussionHistoryRow.localTextPrefix; }
        protected getService() { return PercussionHistoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}