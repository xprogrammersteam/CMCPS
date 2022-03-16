
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class PresentingComplaintsGrid extends Serenity.EntityGrid<PresentingComplaintsRow, any> {
        protected getColumnsKey() { return 'Default.PresentingComplaints'; }
        protected getDialogType() { return PresentingComplaintsDialog; }
        protected getIdProperty() { return PresentingComplaintsRow.idProperty; }
        protected getLocalTextPrefix() { return PresentingComplaintsRow.localTextPrefix; }
        protected getService() { return PresentingComplaintsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}