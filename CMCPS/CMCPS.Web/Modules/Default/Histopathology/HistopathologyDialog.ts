
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class HistopathologyDialog extends Serenity.EntityDialog<HistopathologyRow, any> {
        protected getFormKey() { return HistopathologyForm.formKey; }
        protected getIdProperty() { return HistopathologyRow.idProperty; }
        protected getLocalTextPrefix() { return HistopathologyRow.localTextPrefix; }
        protected getNameProperty() { return HistopathologyRow.nameProperty; }
        protected getService() { return HistopathologyService.baseUrl; }

        protected form = new HistopathologyForm(this.idPrefix);

    }
}