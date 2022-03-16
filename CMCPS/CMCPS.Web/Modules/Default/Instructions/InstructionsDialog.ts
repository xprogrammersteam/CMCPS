
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class InstructionsDialog extends Serenity.EntityDialog<InstructionsRow, any> {
        protected getFormKey() { return InstructionsForm.formKey; }
        protected getIdProperty() { return InstructionsRow.idProperty; }
        protected getLocalTextPrefix() { return InstructionsRow.localTextPrefix; }
        protected getNameProperty() { return InstructionsRow.nameProperty; }
        protected getService() { return InstructionsService.baseUrl; }

        protected form = new InstructionsForm(this.idPrefix);

    }
}