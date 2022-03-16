
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class IllNessDialog extends Serenity.EntityDialog<IllNessRow, any> {
        protected getFormKey() { return IllNessForm.formKey; }
        protected getIdProperty() { return IllNessRow.idProperty; }
        protected getLocalTextPrefix() { return IllNessRow.localTextPrefix; }
        protected getNameProperty() { return IllNessRow.nameProperty; }
        protected getService() { return IllNessService.baseUrl; }

        protected form = new IllNessForm(this.idPrefix);

    }
}