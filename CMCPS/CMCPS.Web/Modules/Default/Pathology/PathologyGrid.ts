
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class PathologyGrid extends Serenity.EntityGrid<PathologyRow, any> {
        protected getColumnsKey() { return 'Default.Pathology'; }
        protected getDialogType() { return PathologyDialog; }
        protected getIdProperty() { return PathologyRow.idProperty; }
        protected getLocalTextPrefix() { return PathologyRow.localTextPrefix; }
        protected getService() { return PathologyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}