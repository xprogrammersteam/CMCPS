
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class IncisionGrid extends Serenity.EntityGrid<IncisionRow, any> {
        protected getColumnsKey() { return 'Default.Incision'; }
        protected getDialogType() { return IncisionDialog; }
        protected getIdProperty() { return IncisionRow.idProperty; }
        protected getLocalTextPrefix() { return IncisionRow.localTextPrefix; }
        protected getService() { return IncisionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}