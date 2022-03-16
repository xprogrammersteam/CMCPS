
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class AnesthetistGrid extends Serenity.EntityGrid<AnesthetistRow, any> {
        protected getColumnsKey() { return 'Default.Anesthetist'; }
        protected getDialogType() { return AnesthetistDialog; }
        protected getIdProperty() { return AnesthetistRow.idProperty; }
        protected getLocalTextPrefix() { return AnesthetistRow.localTextPrefix; }
        protected getService() { return AnesthetistService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}