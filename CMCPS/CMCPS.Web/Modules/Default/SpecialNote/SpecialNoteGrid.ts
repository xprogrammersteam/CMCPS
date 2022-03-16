
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class SpecialNoteGrid extends Serenity.EntityGrid<SpecialNoteRow, any> {
        protected getColumnsKey() { return 'Default.SpecialNote'; }
        protected getDialogType() { return SpecialNoteDialog; }
        protected getIdProperty() { return SpecialNoteRow.idProperty; }
        protected getLocalTextPrefix() { return SpecialNoteRow.localTextPrefix; }
        protected getService() { return SpecialNoteService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}