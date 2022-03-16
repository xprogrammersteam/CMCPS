
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class RegularMedicationDialog extends Serenity.EntityDialog<RegularMedicationRow, any> {
        protected getFormKey() { return RegularMedicationForm.formKey; }
        protected getIdProperty() { return RegularMedicationRow.idProperty; }
        protected getLocalTextPrefix() { return RegularMedicationRow.localTextPrefix; }
        protected getNameProperty() { return RegularMedicationRow.nameProperty; }
        protected getService() { return RegularMedicationService.baseUrl; }

        protected form = new RegularMedicationForm(this.idPrefix);

    }
}