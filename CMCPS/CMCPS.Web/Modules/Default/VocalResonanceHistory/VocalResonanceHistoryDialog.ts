
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class VocalResonanceHistoryDialog extends Serenity.EntityDialog<VocalResonanceHistoryRow, any> {
        protected getFormKey() { return VocalResonanceHistoryForm.formKey; }
        protected getIdProperty() { return VocalResonanceHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return VocalResonanceHistoryRow.localTextPrefix; }
        protected getService() { return VocalResonanceHistoryService.baseUrl; }

        protected form = new VocalResonanceHistoryForm(this.idPrefix);

    }
}