
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class UpazilaGrid extends Serenity.EntityGrid<UpazilaRow, any> {
        protected getColumnsKey() { return 'Default.Upazila'; }
        protected getDialogType() { return UpazilaDialog; }
        protected getIdProperty() { return UpazilaRow.idProperty; }
        protected getLocalTextPrefix() { return UpazilaRow.localTextPrefix; }
        protected getService() { return UpazilaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}