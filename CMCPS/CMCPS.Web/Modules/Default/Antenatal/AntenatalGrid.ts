
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class AntenatalGrid extends Serenity.EntityGrid<AntenatalRow, any> {
        protected getColumnsKey() { return 'Default.Antenatal'; }
        protected getDialogType() { return AntenatalDialog; }
        protected getIdProperty() { return AntenatalRow.idProperty; }
        protected getLocalTextPrefix() { return AntenatalRow.localTextPrefix; }
        protected getService() { return AntenatalService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}