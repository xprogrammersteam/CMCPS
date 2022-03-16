
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class PNoteDialog extends Serenity.EntityDialog<PNoteRow, any> {
        protected getFormKey() { return PNoteForm.formKey; }
        protected getIdProperty() { return PNoteRow.idProperty; }
        protected getLocalTextPrefix() { return PNoteRow.localTextPrefix; }
        protected getNameProperty() { return PNoteRow.nameProperty; }
        protected getService() { return PNoteService.baseUrl; }

        protected form = new PNoteForm(this.idPrefix);

    }
}