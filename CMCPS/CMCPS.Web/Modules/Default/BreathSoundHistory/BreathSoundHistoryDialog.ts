
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class BreathSoundHistoryDialog extends Serenity.EntityDialog<BreathSoundHistoryRow, any> {
        protected getFormKey() { return BreathSoundHistoryForm.formKey; }
        protected getIdProperty() { return BreathSoundHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return BreathSoundHistoryRow.localTextPrefix; }
        protected getService() { return BreathSoundHistoryService.baseUrl; }

        protected form = new BreathSoundHistoryForm(this.idPrefix);

    }
}