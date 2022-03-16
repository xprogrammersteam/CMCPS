
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class PNoteGrid extends Serenity.EntityGrid<PNoteRow, any> {
        protected getColumnsKey() { return 'Default.PNote'; }
        protected getDialogType() { return PNoteDialog; }
        protected getIdProperty() { return PNoteRow.idProperty; }
        protected getLocalTextPrefix() { return PNoteRow.localTextPrefix; }
        protected getService() { return PNoteService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}