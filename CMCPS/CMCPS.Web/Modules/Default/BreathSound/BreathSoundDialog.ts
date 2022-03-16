
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class BreathSoundDialog extends Serenity.EntityDialog<BreathSoundRow, any> {
        protected getFormKey() { return BreathSoundForm.formKey; }
        protected getIdProperty() { return BreathSoundRow.idProperty; }
        protected getLocalTextPrefix() { return BreathSoundRow.localTextPrefix; }
        protected getNameProperty() { return BreathSoundRow.nameProperty; }
        protected getService() { return BreathSoundService.baseUrl; }

        protected form = new BreathSoundForm(this.idPrefix);

    }
}