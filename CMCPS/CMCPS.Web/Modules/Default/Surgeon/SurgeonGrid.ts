
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class SurgeonGrid extends Serenity.EntityGrid<SurgeonRow, any> {
        protected getColumnsKey() { return 'Default.Surgeon'; }
        protected getDialogType() { return SurgeonDialog; }
        protected getIdProperty() { return SurgeonRow.idProperty; }
        protected getLocalTextPrefix() { return SurgeonRow.localTextPrefix; }
        protected getService() { return SurgeonService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}