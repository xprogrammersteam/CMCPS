
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class MajorSurgeryDialog extends Serenity.EntityDialog<MajorSurgeryRow, any> {
        protected getFormKey() { return MajorSurgeryForm.formKey; }
        protected getIdProperty() { return MajorSurgeryRow.idProperty; }
        protected getLocalTextPrefix() { return MajorSurgeryRow.localTextPrefix; }
        protected getNameProperty() { return MajorSurgeryRow.nameProperty; }
        protected getService() { return MajorSurgeryService.baseUrl; }

        protected form = new MajorSurgeryForm(this.idPrefix);

    }
}