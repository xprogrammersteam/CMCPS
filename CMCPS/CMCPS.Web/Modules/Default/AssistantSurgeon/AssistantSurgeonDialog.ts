
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class AssistantSurgeonDialog extends Serenity.EntityDialog<AssistantSurgeonRow, any> {
        protected getFormKey() { return AssistantSurgeonForm.formKey; }
        protected getIdProperty() { return AssistantSurgeonRow.idProperty; }
        protected getLocalTextPrefix() { return AssistantSurgeonRow.localTextPrefix; }
        protected getNameProperty() { return AssistantSurgeonRow.nameProperty; }
        protected getService() { return AssistantSurgeonService.baseUrl; }

        protected form = new AssistantSurgeonForm(this.idPrefix);

    }
}