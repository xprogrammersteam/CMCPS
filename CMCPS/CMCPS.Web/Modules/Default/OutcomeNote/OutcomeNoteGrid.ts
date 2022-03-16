
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class OutcomeNoteGrid extends Serenity.EntityGrid<OutcomeNoteRow, any> {
        protected getColumnsKey() { return 'Default.OutcomeNote'; }
        protected getDialogType() { return OutcomeNoteDialog; }
        protected getIdProperty() { return OutcomeNoteRow.idProperty; }
        protected getLocalTextPrefix() { return OutcomeNoteRow.localTextPrefix; }
        protected getService() { return OutcomeNoteService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}