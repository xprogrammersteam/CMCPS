
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class ComplicationNoteDialog extends Serenity.EntityDialog<ComplicationNoteRow, any> {
        protected getFormKey() { return ComplicationNoteForm.formKey; }
        protected getIdProperty() { return ComplicationNoteRow.idProperty; }
        protected getLocalTextPrefix() { return ComplicationNoteRow.localTextPrefix; }
        protected getNameProperty() { return ComplicationNoteRow.nameProperty; }
        protected getService() { return ComplicationNoteService.baseUrl; }

        protected form = new ComplicationNoteForm(this.idPrefix);

    }
}