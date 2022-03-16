
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class MedicineGrid extends Serenity.EntityGrid<MedicineRow, any> {
        protected getColumnsKey() { return 'Default.Medicine'; }
        protected getDialogType() { return MedicineDialog; }
        protected getIdProperty() { return MedicineRow.idProperty; }
        protected getLocalTextPrefix() { return MedicineRow.localTextPrefix; }
        protected getService() { return MedicineService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}