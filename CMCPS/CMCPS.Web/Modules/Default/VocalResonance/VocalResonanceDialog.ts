
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class VocalResonanceDialog extends Serenity.EntityDialog<VocalResonanceRow, any> {
        protected getFormKey() { return VocalResonanceForm.formKey; }
        protected getIdProperty() { return VocalResonanceRow.idProperty; }
        protected getLocalTextPrefix() { return VocalResonanceRow.localTextPrefix; }
        protected getNameProperty() { return VocalResonanceRow.nameProperty; }
        protected getService() { return VocalResonanceService.baseUrl; }

        protected form = new VocalResonanceForm(this.idPrefix);

    }
}