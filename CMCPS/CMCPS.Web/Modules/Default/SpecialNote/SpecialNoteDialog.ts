
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class SpecialNoteDialog extends Serenity.EntityDialog<SpecialNoteRow, any> {
        protected getFormKey() { return SpecialNoteForm.formKey; }
        protected getIdProperty() { return SpecialNoteRow.idProperty; }
        protected getLocalTextPrefix() { return SpecialNoteRow.localTextPrefix; }
        protected getNameProperty() { return SpecialNoteRow.nameProperty; }
        protected getService() { return SpecialNoteService.baseUrl; }

        protected form = new SpecialNoteForm(this.idPrefix);

    }
}