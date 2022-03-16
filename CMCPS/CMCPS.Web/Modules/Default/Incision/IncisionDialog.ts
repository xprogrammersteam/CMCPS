
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class IncisionDialog extends Serenity.EntityDialog<IncisionRow, any> {
        protected getFormKey() { return IncisionForm.formKey; }
        protected getIdProperty() { return IncisionRow.idProperty; }
        protected getLocalTextPrefix() { return IncisionRow.localTextPrefix; }
        protected getNameProperty() { return IncisionRow.nameProperty; }
        protected getService() { return IncisionService.baseUrl; }

        protected form = new IncisionForm(this.idPrefix);

    }
}