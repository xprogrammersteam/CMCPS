
namespace CMC.Default {

    @Serenity.Decorators.registerClass()
    export class IllNessGrid extends Serenity.EntityGrid<IllNessRow, any> {
        protected getColumnsKey() { return 'Default.IllNess'; }
        protected getDialogType() { return IllNessDialog; }
        protected getIdProperty() { return IllNessRow.idProperty; }
        protected getLocalTextPrefix() { return IllNessRow.localTextPrefix; }
        protected getService() { return IllNessService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}