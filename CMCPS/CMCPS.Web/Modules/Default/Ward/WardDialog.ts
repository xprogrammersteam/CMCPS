
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class WardDialog extends Serenity.EntityDialog<WardRow, any> {
        protected getFormKey() { return WardForm.formKey; }
        protected getIdProperty() { return WardRow.idProperty; }
        protected getLocalTextPrefix() { return WardRow.localTextPrefix; }
        protected getNameProperty() { return WardRow.nameProperty; }
        protected getService() { return WardService.baseUrl; }

        protected form = new WardForm(this.idPrefix);

    }
}