
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class UpazilaDialog extends Serenity.EntityDialog<UpazilaRow, any> {
        protected getFormKey() { return UpazilaForm.formKey; }
        protected getIdProperty() { return UpazilaRow.idProperty; }
        protected getLocalTextPrefix() { return UpazilaRow.localTextPrefix; }
        protected getNameProperty() { return UpazilaRow.nameProperty; }
        protected getService() { return UpazilaService.baseUrl; }

        protected form = new UpazilaForm(this.idPrefix);

    }
}