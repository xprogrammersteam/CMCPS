
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class AuscultationDialog extends Serenity.EntityDialog<AuscultationRow, any> {
        protected getFormKey() { return AuscultationForm.formKey; }
        protected getIdProperty() { return AuscultationRow.idProperty; }
        protected getLocalTextPrefix() { return AuscultationRow.localTextPrefix; }
        protected getNameProperty() { return AuscultationRow.nameProperty; }
        protected getService() { return AuscultationService.baseUrl; }

        protected form = new AuscultationForm(this.idPrefix);

    }
}