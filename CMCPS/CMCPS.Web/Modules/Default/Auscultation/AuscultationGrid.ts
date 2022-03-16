
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class AuscultationGrid extends Serenity.EntityGrid<AuscultationRow, any> {
        protected getColumnsKey() { return 'Default.Auscultation'; }
        protected getDialogType() { return AuscultationDialog; }
        protected getIdProperty() { return AuscultationRow.idProperty; }
        protected getLocalTextPrefix() { return AuscultationRow.localTextPrefix; }
        protected getService() { return AuscultationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}