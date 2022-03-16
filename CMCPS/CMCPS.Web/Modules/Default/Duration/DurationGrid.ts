
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class DurationGrid extends Serenity.EntityGrid<DurationRow, any> {
        protected getColumnsKey() { return 'Default.Duration'; }
        protected getDialogType() { return DurationDialog; }
        protected getIdProperty() { return DurationRow.idProperty; }
        protected getLocalTextPrefix() { return DurationRow.localTextPrefix; }
        protected getService() { return DurationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}