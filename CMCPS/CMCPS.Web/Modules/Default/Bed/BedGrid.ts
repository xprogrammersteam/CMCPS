
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class BedGrid extends Serenity.EntityGrid<BedRow, any> {
        protected getColumnsKey() { return 'Default.Bed'; }
        protected getDialogType() { return BedDialog; }
        protected getIdProperty() { return BedRow.idProperty; }
        protected getLocalTextPrefix() { return BedRow.localTextPrefix; }
        protected getService() { return BedService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}