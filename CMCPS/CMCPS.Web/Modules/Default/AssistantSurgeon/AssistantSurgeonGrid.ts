
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class AssistantSurgeonGrid extends Serenity.EntityGrid<AssistantSurgeonRow, any> {
        protected getColumnsKey() { return 'Default.AssistantSurgeon'; }
        protected getDialogType() { return AssistantSurgeonDialog; }
        protected getIdProperty() { return AssistantSurgeonRow.idProperty; }
        protected getLocalTextPrefix() { return AssistantSurgeonRow.localTextPrefix; }
        protected getService() { return AssistantSurgeonService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}