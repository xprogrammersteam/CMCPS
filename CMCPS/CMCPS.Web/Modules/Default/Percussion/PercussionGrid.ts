
namespace CMCPC.Default {

    @Serenity.Decorators.registerClass()
    export class PercussionGrid extends Serenity.EntityGrid<PercussionRow, any> {
        protected getColumnsKey() { return 'Default.Percussion'; }
        protected getDialogType() { return PercussionDialog; }
        protected getIdProperty() { return PercussionRow.idProperty; }
        protected getLocalTextPrefix() { return PercussionRow.localTextPrefix; }
        protected getService() { return PercussionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}