
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class OutcomeNoteDialog extends Serenity.EntityDialog<OutcomeNoteRow, any> {
        protected getFormKey() { return OutcomeNoteForm.formKey; }
        protected getIdProperty() { return OutcomeNoteRow.idProperty; }
        protected getLocalTextPrefix() { return OutcomeNoteRow.localTextPrefix; }
        protected getNameProperty() { return OutcomeNoteRow.nameProperty; }
        protected getService() { return OutcomeNoteService.baseUrl; }

        protected form = new OutcomeNoteForm(this.idPrefix);

    }
}