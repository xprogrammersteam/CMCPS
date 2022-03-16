
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class MedicineDialog extends Serenity.EntityDialog<MedicineRow, any> {
        protected getFormKey() { return MedicineForm.formKey; }
        protected getIdProperty() { return MedicineRow.idProperty; }
        protected getLocalTextPrefix() { return MedicineRow.localTextPrefix; }
        protected getNameProperty() { return MedicineRow.nameProperty; }
        protected getService() { return MedicineService.baseUrl; }

        protected form = new MedicineForm(this.idPrefix);

    }
}