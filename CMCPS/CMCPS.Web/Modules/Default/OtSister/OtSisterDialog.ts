
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class OtSisterDialog extends Serenity.EntityDialog<OtSisterRow, any> {
        protected getFormKey() { return OtSisterForm.formKey; }
        protected getIdProperty() { return OtSisterRow.idProperty; }
        protected getLocalTextPrefix() { return OtSisterRow.localTextPrefix; }
        protected getNameProperty() { return OtSisterRow.nameProperty; }
        protected getService() { return OtSisterService.baseUrl; }

        protected form = new OtSisterForm(this.idPrefix);

    }
}