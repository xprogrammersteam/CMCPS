
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class BreathSoundHistoryGrid extends Serenity.EntityGrid<BreathSoundHistoryRow, any> {
        protected getColumnsKey() { return 'Default.BreathSoundHistory'; }
        protected getDialogType() { return BreathSoundHistoryDialog; }
        protected getIdProperty() { return BreathSoundHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return BreathSoundHistoryRow.localTextPrefix; }
        protected getService() { return BreathSoundHistoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}