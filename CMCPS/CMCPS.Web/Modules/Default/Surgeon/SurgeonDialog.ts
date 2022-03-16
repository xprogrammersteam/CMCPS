
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class SurgeonDialog extends Serenity.EntityDialog<SurgeonRow, any> {
        protected getFormKey() { return SurgeonForm.formKey; }
        protected getIdProperty() { return SurgeonRow.idProperty; }
        protected getLocalTextPrefix() { return SurgeonRow.localTextPrefix; }
        protected getNameProperty() { return SurgeonRow.nameProperty; }
        protected getService() { return SurgeonService.baseUrl; }

        protected form = new SurgeonForm(this.idPrefix);

    }
}