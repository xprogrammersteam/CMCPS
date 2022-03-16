
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class AuscultationHistoryDialog extends Serenity.EntityDialog<AuscultationHistoryRow, any> {
        protected getFormKey() { return AuscultationHistoryForm.formKey; }
        protected getIdProperty() { return AuscultationHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return AuscultationHistoryRow.localTextPrefix; }
        protected getService() { return AuscultationHistoryService.baseUrl; }

        protected form = new AuscultationHistoryForm(this.idPrefix);

    }
}