
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class OperationDialog extends Serenity.EntityDialog<OperationRow, any> {
        protected getFormKey() { return OperationForm.formKey; }
        protected getIdProperty() { return OperationRow.idProperty; }
        protected getLocalTextPrefix() { return OperationRow.localTextPrefix; }
        protected getNameProperty() { return OperationRow.nameProperty; }
        protected getService() { return OperationService.baseUrl; }

        protected form = new OperationForm(this.idPrefix);

    }
}