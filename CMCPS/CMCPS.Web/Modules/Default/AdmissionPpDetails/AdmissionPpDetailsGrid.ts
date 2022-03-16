
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class AdmissionPpDetailsGrid extends Serenity.EntityGrid<AdmissionPpDetailsRow, any> {
        protected getColumnsKey() { return 'Default.AdmissionPpDetails'; }
        protected getDialogType() { return AdmissionPpDetailsDialog; }
        protected getIdProperty() { return AdmissionPpDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return AdmissionPpDetailsRow.localTextPrefix; }
        protected getService() { return AdmissionPpDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}