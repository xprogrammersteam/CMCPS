
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class DoaseGrid extends Serenity.EntityGrid<DoaseRow, any> {
        protected getColumnsKey() { return 'Default.Doase'; }
        protected getDialogType() { return DoaseDialog; }
        protected getIdProperty() { return DoaseRow.idProperty; }
        protected getLocalTextPrefix() { return DoaseRow.localTextPrefix; }
        protected getService() { return DoaseService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}