
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class ImmunizationDialog extends Serenity.EntityDialog<ImmunizationRow, any> {
        protected getFormKey() { return ImmunizationForm.formKey; }
        protected getIdProperty() { return ImmunizationRow.idProperty; }
        protected getLocalTextPrefix() { return ImmunizationRow.localTextPrefix; }
        protected getNameProperty() { return ImmunizationRow.nameProperty; }
        protected getService() { return ImmunizationService.baseUrl; }

        protected form = new ImmunizationForm(this.idPrefix);

    }
}