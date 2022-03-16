
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class DiagramGrid extends Serenity.EntityGrid<DiagramRow, any> {
        protected getColumnsKey() { return 'Default.Diagram'; }
        protected getDialogType() { return DiagramDialog; }
        protected getIdProperty() { return DiagramRow.idProperty; }
        protected getLocalTextPrefix() { return DiagramRow.localTextPrefix; }
        protected getService() { return DiagramService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}