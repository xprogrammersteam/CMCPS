
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class RegularMedicationGrid extends Serenity.EntityGrid<RegularMedicationRow, any> {
        protected getColumnsKey() { return 'Default.RegularMedication'; }
        protected getDialogType() { return RegularMedicationDialog; }
        protected getIdProperty() { return RegularMedicationRow.idProperty; }
        protected getLocalTextPrefix() { return RegularMedicationRow.localTextPrefix; }
        protected getService() { return RegularMedicationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}