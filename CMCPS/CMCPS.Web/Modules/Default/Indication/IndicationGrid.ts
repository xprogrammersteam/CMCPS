
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class IndicationGrid extends Serenity.EntityGrid<IndicationRow, any> {
        protected getColumnsKey() { return 'Default.Indication'; }
        protected getDialogType() { return IndicationDialog; }
        protected getIdProperty() { return IndicationRow.idProperty; }
        protected getLocalTextPrefix() { return IndicationRow.localTextPrefix; }
        protected getService() { return IndicationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}