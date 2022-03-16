
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class ImmunizationGrid extends Serenity.EntityGrid<ImmunizationRow, any> {
        protected getColumnsKey() { return 'Default.Immunization'; }
        protected getDialogType() { return ImmunizationDialog; }
        protected getIdProperty() { return ImmunizationRow.idProperty; }
        protected getLocalTextPrefix() { return ImmunizationRow.localTextPrefix; }
        protected getService() { return ImmunizationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}