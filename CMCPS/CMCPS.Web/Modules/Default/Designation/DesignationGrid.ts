
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class DesignationGrid extends Serenity.EntityGrid<DesignationRow, any> {
        protected getColumnsKey() { return 'Default.Designation'; }
        protected getDialogType() { return DesignationDialog; }
        protected getIdProperty() { return DesignationRow.idProperty; }
        protected getLocalTextPrefix() { return DesignationRow.localTextPrefix; }
        protected getService() { return DesignationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}