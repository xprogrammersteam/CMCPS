
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class OtherLabGrid extends Serenity.EntityGrid<OtherLabRow, any> {
        protected getColumnsKey() { return 'Default.OtherLab'; }
        protected getDialogType() { return OtherLabDialog; }
        protected getIdProperty() { return OtherLabRow.idProperty; }
        protected getLocalTextPrefix() { return OtherLabRow.localTextPrefix; }
        protected getService() { return OtherLabService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}