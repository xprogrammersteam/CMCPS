
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class ComplicationNoteGrid extends Serenity.EntityGrid<ComplicationNoteRow, any> {
        protected getColumnsKey() { return 'Default.ComplicationNote'; }
        protected getDialogType() { return ComplicationNoteDialog; }
        protected getIdProperty() { return ComplicationNoteRow.idProperty; }
        protected getLocalTextPrefix() { return ComplicationNoteRow.localTextPrefix; }
        protected getService() { return ComplicationNoteService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}