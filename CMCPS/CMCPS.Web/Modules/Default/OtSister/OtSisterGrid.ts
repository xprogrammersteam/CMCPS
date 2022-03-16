
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class OtSisterGrid extends Serenity.EntityGrid<OtSisterRow, any> {
        protected getColumnsKey() { return 'Default.OtSister'; }
        protected getDialogType() { return OtSisterDialog; }
        protected getIdProperty() { return OtSisterRow.idProperty; }
        protected getLocalTextPrefix() { return OtSisterRow.localTextPrefix; }
        protected getService() { return OtSisterService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}