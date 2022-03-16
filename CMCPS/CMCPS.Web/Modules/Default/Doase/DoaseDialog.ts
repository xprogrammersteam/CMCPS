
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class DoaseDialog extends Serenity.EntityDialog<DoaseRow, any> {
        protected getFormKey() { return DoaseForm.formKey; }
        protected getIdProperty() { return DoaseRow.idProperty; }
        protected getLocalTextPrefix() { return DoaseRow.localTextPrefix; }
        protected getNameProperty() { return DoaseRow.nameProperty; }
        protected getService() { return DoaseService.baseUrl; }

        protected form = new DoaseForm(this.idPrefix);

    }
}