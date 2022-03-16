
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class DesignationDialog extends Serenity.EntityDialog<DesignationRow, any> {
        protected getFormKey() { return DesignationForm.formKey; }
        protected getIdProperty() { return DesignationRow.idProperty; }
        protected getLocalTextPrefix() { return DesignationRow.localTextPrefix; }
        protected getNameProperty() { return DesignationRow.nameProperty; }
        protected getService() { return DesignationService.baseUrl; }

        protected form = new DesignationForm(this.idPrefix);

    }
}