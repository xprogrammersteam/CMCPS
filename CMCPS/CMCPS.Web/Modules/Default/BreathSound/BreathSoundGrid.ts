
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class BreathSoundGrid extends Serenity.EntityGrid<BreathSoundRow, any> {
        protected getColumnsKey() { return 'Default.BreathSound'; }
        protected getDialogType() { return BreathSoundDialog; }
        protected getIdProperty() { return BreathSoundRow.idProperty; }
        protected getLocalTextPrefix() { return BreathSoundRow.localTextPrefix; }
        protected getService() { return BreathSoundService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}