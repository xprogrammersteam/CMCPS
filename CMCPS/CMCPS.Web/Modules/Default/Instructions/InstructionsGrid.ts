
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class InstructionsGrid extends Serenity.EntityGrid<InstructionsRow, any> {
        protected getColumnsKey() { return 'Default.Instructions'; }
        protected getDialogType() { return InstructionsDialog; }
        protected getIdProperty() { return InstructionsRow.idProperty; }
        protected getLocalTextPrefix() { return InstructionsRow.localTextPrefix; }
        protected getService() { return InstructionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}